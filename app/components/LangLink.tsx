"use client";

import { LANG_COOKIE, langPath, type Lang } from "../i18n";

export default function LangLink({ lang, className, children }: { lang: Lang; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={langPath(lang)}
      hrefLang={lang}
      className={className}
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
      }}
    >
      {children}
    </a>
  );
}
