export const LANGS = ["en", "tr", "es", "pt", "de", "it", "pl", "fr", "ja", "nl"] as const;
export type Lang = (typeof LANGS)[number];

/**
 * Languages that have their own app screenshots in public/screens/<lang>; others fall back to English.
 * Every language has them now; list a new language here only after rendering its screens.
 */
export const SCREEN_LANGS: readonly Lang[] = LANGS;

export function screenLang(lang: Lang): Lang {
  return SCREEN_LANGS.includes(lang) ? lang : "en";
}

export const SITE_URL = "https://www.knowusbetter.app";
export const APP_STORE_ID = "6754946265";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const LANG_COOKIE = "lang";

export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  tr: "Türkçe",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
  it: "Italiano",
  pl: "Polski",
  fr: "Français",
  ja: "日本語",
  nl: "Nederlands",
};

export function isLang(value: string | null | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

export function langPath(lang: Lang) {
  return lang === "en" ? "/" : `/${lang}`;
}

export function pickLang(acceptLanguage: string | null): Lang {
  const preferred = (acceptLanguage ?? "")
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
  return preferred.find(isLang) ?? "en";
}
