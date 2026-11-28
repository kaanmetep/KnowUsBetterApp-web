"use client";

import { useEffect } from "react";

/* Two PostHog events without the SDK (keeps the page tiny):
   bio_page_view on load, bio_download_click on any [data-download] tap.
   Same project as the app; phc_ keys are public by design. */
const POSTHOG_KEY = "phc_rodAQxcicWjwhx6vJyYKMzmg9hrBqgCqq48ZBT4Scs97";
const POSTHOG_URL = "https://us.i.posthog.com/i/v0/e/";

type Props = { platform: string; inApp: string | null; source: string; lang: string };

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

export default function Track({ platform, inApp, source, lang }: Props) {
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
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest("[data-download]")) send("bio_download_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [platform, inApp, source, lang]);

  return null;
}
