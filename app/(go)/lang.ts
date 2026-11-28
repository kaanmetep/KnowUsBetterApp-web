import { pickLang, isLang, type Lang } from "../i18n";

/** Set by proxy.ts on /tt requests: the language the page should render in. */
export const GO_LANG_HEADER = "x-kub-lang";

/** Accounts whose audience reads one language, whatever their phone is set to. */
export const SOURCE_LANG: Record<string, Lang> = {
  ciftsorulari: "tr",
};

export function goLang(h: Headers): Lang {
  const forced = h.get(GO_LANG_HEADER);
  return isLang(forced) ? forced : pickLang(h.get("accept-language"));
}
