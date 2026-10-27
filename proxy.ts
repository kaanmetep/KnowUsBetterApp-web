import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE, isLang, langPath, pickLang, type Lang } from "./app/i18n";

const BOT = /bot|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|facebookexternalhit|whatsapp|telegram|preview|gpt|openai|claude|anthropic|perplexity|cohere|bytespider|applebot/i;
const ONE_YEAR = 60 * 60 * 24 * 365;

function remember(res: NextResponse, lang: Lang) {
  res.cookies.set(LANG_COOKIE, lang, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  return res;
}

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Legacy /?lang=xx links (shared before per-language URLs existed).
  const legacy = searchParams.get("lang");
  if (pathname === "/" && legacy !== null) {
    const lang = isLang(legacy) ? legacy : "en";
    const url = request.nextUrl.clone();
    url.pathname = langPath(lang);
    url.searchParams.delete("lang");
    return remember(NextResponse.redirect(url, 308), lang);
  }

  if (pathname === "/") {
    const saved = request.cookies.get(LANG_COOKIE)?.value;
    if (saved || BOT.test(request.headers.get("user-agent") ?? "")) return NextResponse.next();
    const lang = pickLang(request.headers.get("accept-language"));
    if (lang === "en") return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = langPath(lang);
    return NextResponse.redirect(url, 307);
  }

  const lang = pathname.slice(1);
  if (isLang(lang) && request.cookies.get(LANG_COOKIE)?.value !== lang) {
    return remember(NextResponse.next(), lang);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/tr", "/es"],
};
