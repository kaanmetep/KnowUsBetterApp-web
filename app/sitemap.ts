import type { MetadataRoute } from "next";
import { LANGS, SITE_URL, langPath } from "./i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(LANGS.map((lang) => [lang, `${SITE_URL}${langPath(lang)}`])),
    "x-default": `${SITE_URL}/`,
  };
  const now = new Date();

  return [
    ...LANGS.map((lang) => ({
      url: `${SITE_URL}${langPath(lang)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: { languages },
      images: [`${SITE_URL}/screens/${lang}/game.webp`, `${SITE_URL}/screens/${lang}/report.webp`],
    })),
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
