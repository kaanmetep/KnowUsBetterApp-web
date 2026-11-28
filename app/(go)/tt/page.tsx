import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { APPLE_LOGO } from "../../components/AppStoreButton";
import { COPY } from "../../content";
import { screenLang } from "../../i18n";
import { siteMetadata } from "../../seo";
import { appStoreLink, cleanSource, detect, WORDS } from "../go";
import { goLang } from "../lang";
import Track from "./Track";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "KnowUsBetter: Couple Quiz Game",
  description: COPY.en.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default async function BioLinkPage({ searchParams }: { searchParams: Promise<Record<string, string | string[]>> }) {
  const h = await headers();
  const { platform, inApp } = detect(h.get("user-agent") ?? "");
  const lang = goLang(h);
  const source = cleanSource((await searchParams).s);
  const c = COPY[lang];
  const w = WORDS[lang];
  const href = appStoreLink(source);

  return (
    <main className="flex min-h-[100svh] flex-col items-center bg-sand px-5 pb-10 pt-[max(28px,env(safe-area-inset-top))] text-center">
      <Track platform={platform} inApp={inApp} source={source} lang={lang} />

      <div className="flex items-center gap-2.5">
        <Image src="/images/app-icon.png" alt="" width={36} height={36} priority className="rounded-[9px] border border-hairline" />
        <span className="font-serif text-[17px] font-bold tracking-tight text-ink">KnowUsBetter</span>
      </div>

      <h1
        className="headline mt-7 max-w-[420px] text-balance font-serif text-[34px] font-bold leading-[1.15] text-ink"
        dangerouslySetInnerHTML={{ __html: c.hero.headline }}
      />
      <p className="mt-3 max-w-[380px] text-balance text-[15px] leading-relaxed text-muted">{c.hero.sub}</p>

      <div className="mt-7 flex w-full max-w-[360px] flex-col items-center">
        {platform === "desktop" ? (
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-2xl border border-hairline bg-white p-3">
              <Image src="/images/app-store-qr.svg" alt="" width={150} height={150} unoptimized />
            </div>
            <p className="text-[14px] font-semibold text-muted">{w.desktop}</p>
          </div>
        ) : (
          <>
            <a
              href={href}
              data-download
              className="flex h-[62px] w-full items-center justify-center gap-3 rounded-2xl bg-ink text-white shadow-[0_18px_36px_-14px_rgba(30,41,59,0.55)] transition-transform active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 -translate-y-px" aria-hidden>
                <path d={APPLE_LOGO} />
              </svg>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[11px] font-semibold tracking-wide text-white/75">{c.badge[0]}</span>
                <span className="mt-1 text-[20px] font-bold tracking-tight">{c.badge[1]}</span>
              </span>
            </a>
            <p className="mt-2.5 text-[13px] font-semibold text-muted">{c.hero.note.split(/\s*[·・]\s*/)[0]}</p>
            {platform === "android" && (
              <p className="mt-4 rounded-xl border border-accent-border bg-accent-soft px-4 py-3 text-[14px] font-semibold text-accent-deep">
                {w.android}
              </p>
            )}
            {platform === "ios" && inApp && (
              <p className="mt-4 max-w-[320px] text-[13px] leading-snug text-faint">{w.openHint}</p>
            )}
          </>
        )}
      </div>

      {/* Box shadow on a rounded layer behind the screenshot, as on the home page:
          a drop-shadow filter on the image renders as a muddy box in iOS webviews. */}
      <a href={href} data-download className="relative mt-9 block w-[230px]" tabIndex={-1} aria-hidden>
        <span className="absolute inset-x-[0.8%] inset-y-[0.4%] rounded-[16.6%/7.7%] shadow-[0_40px_50px_-10px_rgba(74,24,38,0.22),0_14px_22px_-4px_rgba(74,24,38,0.12)]" />
        <Image
          src={`/screens/${screenLang(lang)}/game.webp`}
          alt={c.alt.vibe}
          width={720}
          height={1548}
          sizes="230px"
          priority
          className="relative h-auto w-full select-none"
          draggable={false}
        />
      </a>
    </main>
  );
}
