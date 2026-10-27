import { COPY } from "../content";
import { APP_STORE_ID, APP_STORE_URL, LANGS, SITE_URL, langPath, type Lang } from "../i18n";

type Rating = { averageUserRating?: number; userRatingCount?: number };

async function appStoreRating(): Promise<Rating> {
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${APP_STORE_ID}`, { next: { revalidate: 86_400 } });
    const data = await res.json();
    return data.results?.[0] ?? {};
  } catch {
    return {};
  }
}

export default async function StructuredData({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const pageUrl = `${SITE_URL}${langPath(lang)}`;
  const { averageUserRating, userRatingCount } = await appStoreRating();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "KnowUsBetter",
        alternateName: "Know Us Better",
        url: SITE_URL,
        logo: `${SITE_URL}/images/app-icon.png`,
        email: "help@knowusbetter.app",
        founder: { "@id": `${SITE_URL}/#founder` },
        sameAs: [APP_STORE_URL],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Kaan Peksen",
        url: `https://apps.apple.com/developer/kaan-peksen/id1851066914`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "KnowUsBetter",
        alternateName: ["Know Us Better", "KnowUsBetter: Couple Quiz Game"],
        url: SITE_URL,
        inLanguage: [...LANGS],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "KnowUsBetter: Couple Quiz Game",
        alternateName: ["KnowUsBetter", "Know Us Better"],
        description: c.meta.description,
        url: pageUrl,
        image: `${SITE_URL}/images/app-icon.png`,
        screenshot: LANGS.flatMap((l) => ["game", "vibe", "report"].map((s) => `${SITE_URL}/screens/${l}/${s}.webp`)),
        operatingSystem: "iOS 15.1 or later",
        applicationCategory: "GameApplication",
        applicationSubCategory: "Couples quiz game",
        genre: ["Trivia", "Casual", "Lifestyle"],
        inLanguage: [...LANGS],
        contentRating: "17+",
        installUrl: APP_STORE_URL,
        downloadUrl: APP_STORE_URL,
        sameAs: [APP_STORE_URL],
        author: { "@id": `${SITE_URL}/#founder` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        ...(averageUserRating && userRatingCount
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: averageUserRating,
                ratingCount: userRatingCount,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        mainEntity: { "@id": `${pageUrl}#faq` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: lang,
        mainEntity: c.faq.items.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
