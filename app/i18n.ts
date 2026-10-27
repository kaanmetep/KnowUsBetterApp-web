export const LANGS = ["en", "tr", "es"] as const;
export type Lang = (typeof LANGS)[number];

export const SITE_URL = "https://www.knowusbetter.app";
export const APP_STORE_ID = "6754946265";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const LANG_COOKIE = "lang";

export const LANG_NAME: Record<Lang, string> = { en: "English", tr: "Türkçe", es: "Español" };

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
