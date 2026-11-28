import { APP_STORE_ID, type Lang } from "../i18n";

/* Shared bits of the social bio-link page (/tt). TikTok and Instagram open bio
   links in their own webview, where apps.apple.com links often go nowhere and
   Safari's smart banner never shows, so the page is one big tap-to-open button. */

export type Platform = "ios" | "android" | "desktop";

export function detect(ua: string) {
  const platform: Platform = /iPhone|iPad|iPod/i.test(ua) ? "ios" : /Android/i.test(ua) ? "android" : "desktop";
  const inApp = /musical_ly|Bytedance|TikTok|trill_/i.test(ua)
    ? "tiktok"
    : /Instagram|FBAN|FBAV|FB_IAB/i.test(ua)
      ? "instagram"
      : null;
  return { platform, inApp };
}

/* Apple counts installs per campaign token (App Store Connect → Analytics →
   Acquisition → Campaigns). It needs the provider token (pt) from the campaign
   link generator; without it Apple ignores ct. */
export const APPLE_PROVIDER_TOKEN = "";

/** Campaign source from ?s=, e.g. /tt?s=ciftsorulari. Letters, digits, _ and - only. */
export function cleanSource(raw: string | string[] | undefined) {
  const value = (Array.isArray(raw) ? raw[0] : raw) ?? "";
  return value.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 30) || "bio";
}

export function appStoreLink(source: string) {
  const params = new URLSearchParams({ ct: `tt_${source}`.slice(0, 40), mt: "8" });
  if (APPLE_PROVIDER_TOKEN) params.set("pt", APPLE_PROVIDER_TOKEN);
  return `https://apps.apple.com/app/id${APP_STORE_ID}?${params}`;
}

type Words = {
  /** One-line label for the big App Store button. */
  button: string;
  openHint: string;
  /** Overlay shown when the in-app browser swallowed the App Store tap. */
  guide: { title: string; step1: string; step2: string; close: string };
  android: string;
  desktop: string;
};

export const WORDS: Record<Lang, Words> = {
  en: {
    button: "Download on the App Store",
    guide: { title: "App Store didn’t open?", step1: "Tap ••• at the top right", step2: "Choose “Open in browser”", close: "Got it" },
    openHint: "Nothing happened? Tap ••• at the top right, then “Open in browser”.",
    android: "The Android version is coming soon. For now it's on iPhone.",
    desktop: "Point your iPhone camera at the code",
  },
  tr: {
    button: "App Store'dan indir",
    guide: { title: "App Store açılmadı mı?", step1: "Sağ üstteki ••• simgesine dokun", step2: "“Tarayıcıda aç”ı seç", close: "Tamam" },
    openHint: "Açılmadı mı? Sağ üstteki ••• simgesine dokunup “Tarayıcıda aç”ı seç.",
    android: "Android sürümü çok yakında. Şimdilik iPhone'da.",
    desktop: "iPhone kameranı koda tut",
  },
  es: {
    button: "Descargar en App Store",
    guide: { title: "¿No se abrió App Store?", step1: "Toca ••• arriba a la derecha", step2: "Elige “Abrir en el navegador”", close: "Entendido" },
    openHint: "¿No pasó nada? Toca ••• arriba a la derecha y luego “Abrir en el navegador”.",
    android: "La versión para Android llega pronto. Por ahora está en iPhone.",
    desktop: "Apunta la cámara de tu iPhone al código",
  },
  pt: {
    button: "Baixar na App Store",
    guide: { title: "A App Store não abriu?", step1: "Toque em ••• no canto superior direito", step2: "Escolha “Abrir no navegador”", close: "Entendi" },
    openHint: "Não abriu? Toque em ••• no canto superior direito e depois em “Abrir no navegador”.",
    android: "A versão para Android chega em breve. Por enquanto está no iPhone.",
    desktop: "Aponte a câmera do seu iPhone para o código",
  },
  de: {
    button: "Im App Store laden",
    guide: { title: "App Store hat sich nicht geöffnet?", step1: "Tippe oben rechts auf •••", step2: "Wähle „Im Browser öffnen“", close: "Alles klar" },
    openHint: "Nichts passiert? Tippe oben rechts auf ••• und dann auf „Im Browser öffnen“.",
    android: "Die Android-Version kommt bald. Bis dahin gibt es die App fürs iPhone.",
    desktop: "Halte deine iPhone-Kamera auf den Code",
  },
  it: {
    button: "Scarica dall'App Store",
    guide: { title: "L'App Store non si è aperto?", step1: "Tocca ••• in alto a destra", step2: "Scegli “Apri nel browser”", close: "Ok" },
    openHint: "Non succede niente? Tocca ••• in alto a destra, poi “Apri nel browser”.",
    android: "La versione Android arriva presto. Per ora è su iPhone.",
    desktop: "Inquadra il codice con la fotocamera dell'iPhone",
  },
  pl: {
    button: "Pobierz z App Store",
    guide: { title: "App Store się nie otworzył?", step1: "Dotknij ••• w prawym górnym rogu", step2: "Wybierz „Otwórz w przeglądarce”", close: "OK" },
    openHint: "Nic się nie stało? Dotknij ••• w prawym górnym rogu, a potem „Otwórz w przeglądarce”.",
    android: "Wersja na Androida już wkrótce. Na razie jest na iPhone'a.",
    desktop: "Skieruj aparat iPhone'a na kod",
  },
  fr: {
    button: "Télécharger sur l'App Store",
    guide: { title: "L'App Store ne s'est pas ouvert ?", step1: "Touche ••• en haut à droite", step2: "Choisis « Ouvrir dans le navigateur »", close: "C'est noté" },
    openHint: "Rien ne s'est passé ? Touche ••• en haut à droite, puis « Ouvrir dans le navigateur ».",
    android: "La version Android arrive bientôt. Pour l'instant, c'est sur iPhone.",
    desktop: "Vise le code avec l'appareil photo de ton iPhone",
  },
  ja: {
    button: "App Storeでダウンロード",
    guide: { title: "App Storeが開きませんか？", step1: "右上の ••• をタップ", step2: "「ブラウザで開く」を選ぶ", close: "OK" },
    openHint: "開かない場合は、右上の ••• から「ブラウザで開く」を選んでください。",
    android: "Android版はもうすぐ登場します。現在はiPhone版のみです。",
    desktop: "iPhoneのカメラでコードを読み取ってください",
  },
  nl: {
    button: "Download in de App Store",
    guide: { title: "Ging de App Store niet open?", step1: "Tik rechtsboven op •••", step2: "Kies ‘Openen in browser’", close: "Oké" },
    openHint: "Gebeurt er niets? Tik rechtsboven op ••• en dan op ‘Openen in browser’.",
    android: "De Android-versie komt binnenkort. Voorlopig is de app er voor iPhone.",
    desktop: "Richt de camera van je iPhone op de code",
  },
};
