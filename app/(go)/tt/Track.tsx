"use client";

import { useEffect, useState } from "react";

/* PostHog events without the SDK (keeps the page tiny):
   bio_page_view on load, bio_download_click on any [data-download] tap, and
   bio_open_failed when an in-app browser swallowed that tap.
   Same project as the app; phc_ keys are public by design. */
const POSTHOG_KEY = "phc_rodAQxcicWjwhx6vJyYKMzmg9hrBqgCqq48ZBT4Scs97";
const POSTHOG_URL = "https://us.i.posthog.com/i/v0/e/";

/* When the App Store opens, the page is hidden (or the window blurs) within a
   moment. If it is still in front after this long, the webview blocked it. */
const OPEN_TIMEOUT_MS = 1600;

type Guide = { title: string; step1: string; step2: string; close: string };
type Props = {
  platform: string;
  inApp: string | null;
  source: string;
  lang: string;
  guide: Guide;
  /** ?guide=1: show the overlay right away, to preview it. */
  previewGuide: boolean;
};

function visitorId() {
  try {
    const saved = localStorage.getItem("kub_vid");
    if (saved) return saved;
    const id = crypto.randomUUID();
    localStorage.setItem("kub_vid", id);
    return id;
  } catch {
    return Math.random().toString(36).slice(2);
  }
}

export default function Track({ platform, inApp, source, lang, guide, previewGuide }: Props) {
  const [showGuide, setShowGuide] = useState(previewGuide);

  useEffect(() => {
    const id = visitorId();
    const send = (event: string) => {
      const body = JSON.stringify({
        api_key: POSTHOG_KEY,
        event,
        distinct_id: id,
        properties: {
          platform,
          in_app: inApp ?? "none",
          source,
          lang,
          $current_url: location.href,
          $referrer: document.referrer || undefined,
          $process_person_profile: false,
        },
      });
      try {
        fetch(POSTHOG_URL, { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(
          () => {},
        );
      } catch {}
    };

    send("bio_page_view");

    let left = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const markLeft = () => {
      if (document.visibilityState === "hidden") left = true;
    };
    const onBlur = () => (left = true);

    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element | null)?.closest("[data-download]")) return;
      send("bio_download_click");
      if (!inApp || platform === "desktop") return;
      left = false;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (left || document.visibilityState === "hidden") return;
        setShowGuide(true);
        send("bio_open_failed");
      }, OPEN_TIMEOUT_MS);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", markLeft);
    window.addEventListener("blur", onBlur);
    window.addEventListener("pagehide", onBlur);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", markLeft);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("pagehide", onBlur);
    };
  }, [platform, inApp, source, lang]);

  if (!showGuide) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-[2px]"
      onClick={() => setShowGuide(false)}
      role="dialog"
      aria-modal
      aria-label={guide.title}
    >
      {/* Arrow toward the in-app browser's ••• menu (top right). */}
      <svg
        viewBox="0 0 120 120"
        className="absolute right-4 top-[max(6px,env(safe-area-inset-top))] h-24 w-24 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M18 112 C 30 60, 60 30, 100 14" />
        <path d="M74 12 L 102 13 L 94 40" />
      </svg>

      <div
        className="absolute inset-x-5 top-[max(120px,calc(env(safe-area-inset-top)+110px))] mx-auto max-w-[360px] rounded-3xl bg-white p-6 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-serif text-[22px] font-bold leading-tight text-ink">{guide.title}</p>
        <ol className="mt-5 space-y-4">
          {[guide.step1, guide.step2].map((step, i) => (
            <li key={step} className="flex items-center gap-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-[15px] font-bold text-white">
                {i + 1}
              </span>
              <span className="text-[16px] font-semibold leading-snug text-ink">{step}</span>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => setShowGuide(false)}
          className="mt-6 h-12 w-full rounded-2xl bg-sand text-[15px] font-bold text-ink active:scale-[0.98]"
        >
          {guide.close}
        </button>
      </div>
    </div>
  );
}
