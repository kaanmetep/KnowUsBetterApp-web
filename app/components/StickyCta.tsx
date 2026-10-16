"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { APP_STORE_URL } from "../content";

/* Mobile-only bar that shows while no App Store button (nor the footer) is
   on screen. Most visitors arrive from TikTok/Instagram in-app browsers,
   where Safari's smart banner never appears. */
export default function StickyCta({ title, sub, cta }: { title: string; sub: string; cta: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-cta], footer");
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? onScreen.add(entry.target) : onScreen.delete(entry.target)));
      setVisible(onScreen.size === 0 && window.scrollY > 200);
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-50 transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-[22px] border border-hairline bg-white/90 p-2.5 pr-3 shadow-[0_18px_40px_-12px_rgba(74,24,38,0.35)] backdrop-blur-xl"
      >
        <Image src="/images/app-icon.png" alt="" width={44} height={44} className="rounded-[11px] border border-hairline" />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-[14px] font-bold text-ink">{title}</span>
          <span className="text-[12px] font-semibold text-muted">{sub}</span>
        </span>
        <span className="rounded-full bg-accent px-4 py-2 text-[13px] font-bold text-white">{cta}</span>
      </a>
    </div>
  );
}
