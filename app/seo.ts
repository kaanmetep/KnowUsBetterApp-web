import type { Metadata, Viewport } from "next";
import { COPY } from "./content";
import { APP_STORE_ID, LANGS, SITE_URL, langPath, type Lang } from "./i18n";

const OG_LOCALE: Record<Lang, string> = { en: "en_US", tr: "tr_TR", es: "es_ES" };

const OG_IMAGE = { url: "/images/og.png", width: 1200, height: 630, alt: "KnowUsBetter: Couple Quiz Game" };

export const languageAlternates = {
  ...Object.fromEntries(LANGS.map((lang) => [lang, langPath(lang)])),
  "x-default": "/",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "KnowUsBetter",
  authors: [{ name: "Kaan Peksen" }],
  creator: "Kaan Peksen",
  publisher: "KnowUsBetter",
  category: "games",
  appleWebApp: { title: "KnowUsBetter" },
  formatDetection: { telephone: false },
  openGraph: { siteName: "KnowUsBetter", type: "website", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: { "apple-itunes-app": `app-id=${APP_STORE_ID}` },
};

export const viewport: Viewport = {
  themeColor: "#f3eae3",
};

export function homeMetadata(lang: Lang): Metadata {
  const { meta } = COPY[lang];
  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords: KEYWORDS[lang],
    alternates: { canonical: langPath(lang), languages: languageAlternates },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: langPath(lang),
      siteName: "KnowUsBetter",
      type: "website",
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: meta.ogTitle, description: meta.ogDescription, images: [OG_IMAGE.url] },
  };
}

const KEYWORDS: Record<Lang, string[]> = {
  en: [
    "KnowUsBetter",
    "Know Us Better",
    "Know Us Better app",
    "couples quiz",
    "couple quiz game",
    "how well do you know your partner",
    "relationship quiz app",
    "couples game app",
    "date night game",
    "long distance couple games",
    "compatibility test for couples",
  ],
  tr: [
    "KnowUsBetter",
    "Know Us Better",
    "çiftler için quiz",
    "çift testi",
    "sevgili testi",
    "partnerini ne kadar tanıyorsun",
    "ilişki testi",
    "çiftler için oyun",
    "uzak mesafe ilişki oyunu",
    "uyum testi",
  ],
  es: [
    "KnowUsBetter",
    "Know Us Better",
    "quiz para parejas",
    "juego de preguntas para parejas",
    "cuánto conoces a tu pareja",
    "test de pareja",
    "juegos para parejas a distancia",
    "test de compatibilidad",
  ],
};
