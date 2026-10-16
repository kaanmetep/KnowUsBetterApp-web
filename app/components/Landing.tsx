import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import GuessQuiz from "./GuessQuiz";
import LivePhone from "./LivePhone";
import StickyCta from "./StickyCta";
import { APP_STORE_URL, COPY, LANGS, type Lang } from "../content";

const LANG_NAME: Record<Lang, string> = { en: "English", tr: "Türkçe", es: "Español" };

function ScanCode({ label }: { label: string }) {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <div className="rounded-xl border border-hairline bg-white p-1.5 shadow-[0_6px_16px_rgba(45,10,20,0.05)]">
        <Image src="/images/app-store-qr.svg" alt="" width={50} height={50} unoptimized />
      </div>
      <span className="max-w-[120px] text-[12px] font-semibold leading-snug text-faint">{label}</span>
    </div>
  );
}

export default function Landing({ lang, tonightIndex }: { lang: Lang; tonightIndex: number }) {
  const c = COPY[lang];

  return (
    <div lang={lang} className="grain relative overflow-x-clip">
      {/* ───────── Hero ───────── */}
      <section className="relative bg-gradient-to-b from-sand via-[#f8f1ec] to-bg">
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,75,106,0.11)_0%,rgba(201,75,106,0.04)_38%,transparent_64%)] lg:left-[72%]" />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7">
          <a href={`/?lang=${lang}`} className="flex items-center gap-2.5">
            <Image src="/images/app-icon.png" alt="" width={34} height={34} className="rounded-[9px] border border-black/5" priority />
            <span className="font-serif text-[17px] font-bold tracking-tight text-ink">KnowUsBetter</span>
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-[13px] font-bold text-ink backdrop-blur transition-colors hover:bg-white"
          >
            {c.navCta}
          </a>
        </header>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-28 lg:pt-20">
          <div className="flex max-w-[560px] flex-col items-center text-center lg:items-start lg:text-left">
            <span className="eyebrow lg-left rise">{c.hero.eyebrow}</span>
            <h1
              className="headline rise mt-6 text-balance font-serif text-[42px] font-bold leading-[1.12] tracking-[-0.01em] text-ink [animation-delay:80ms] sm:text-[56px] lg:text-[64px]"
              dangerouslySetInnerHTML={{ __html: c.hero.headline }}
            />
            <p className="rise mt-6 max-w-[460px] text-pretty text-[17px] leading-[1.7] text-muted [animation-delay:160ms] sm:text-[18px]">
              {c.hero.sub}
            </p>
            <div className="rise mt-9 flex items-center gap-6 [animation-delay:240ms]" data-cta>
              <AppStoreButton label={c.badge} />
              <ScanCode label={c.hero.scan} />
            </div>
            <p className="rise mt-5 text-[13px] font-semibold text-faint [animation-delay:300ms]">{c.hero.note}</p>
          </div>

          <div className="rise-phone relative shrink-0 lg:mr-6">
            <LivePhone lang={lang} partner={c.hero.partner} />
          </div>
        </div>
      </section>

      {/* ───────── Try it ───────── */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="eyebrow">{c.guess.eyebrow}</span>
          <h2 className="mt-5 font-serif text-[34px] font-bold leading-tight text-ink sm:text-[42px]">{c.guess.title}</h2>
          <p className="mt-3 text-[16px] text-muted">{c.guess.sub}</p>
        </div>
        <div className="mt-10">
          <GuessQuiz lang={lang} copy={c.guess} />
        </div>
      </section>

      {/* ───────── How it plays ───────── */}
      <section className="relative border-y border-hairline bg-gradient-to-b from-bg to-[#fbf3ee] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <span className="eyebrow lg-left">{c.how.eyebrow}</span>
            <h2 className="mx-auto mt-5 max-w-[480px] text-balance font-serif text-[32px] font-bold leading-[1.2] text-ink sm:text-[40px] lg:mx-0">
              {c.how.title}
            </h2>
            <ol className="mx-auto mt-10 max-w-[440px] text-left lg:mx-0">
              {c.how.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5 border-t border-[#efe2dd] py-6 last:border-b">
                  <span className="pt-0.5 font-serif text-[15px] font-bold text-accent/60">0{i + 1}</span>
                  <div>
                    <h3 className="text-[17px] font-bold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mx-auto flex h-[470px] w-full max-w-[420px] justify-center sm:h-[560px] sm:max-w-[500px]">
            <Image
              src={`/screens/${lang}/vibe.webp`}
              alt=""
              width={720}
              height={1548}
              className="phone-shadow absolute left-0 top-0 h-auto w-[56%] -rotate-[5deg]"
            />
            <Image
              src={`/screens/${lang}/report.webp`}
              alt=""
              width={720}
              height={1548}
              className="phone-shadow absolute right-0 top-[9%] h-auto w-[56%] rotate-[4deg]"
            />
          </div>
        </div>
      </section>

      {/* ───────── Tonight ───────── */}
      <section className="relative px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Image
            src="/images/couple.webp"
            alt=""
            width={1320}
            height={591}
            className="w-full max-w-[520px] [mask-image:linear-gradient(180deg,#000_70%,transparent)]"
          />
          <span className="eyebrow mt-8">{c.tonight.eyebrow}</span>
          <p className="mt-6 max-w-[620px] text-balance font-serif text-[28px] font-bold leading-[1.35] text-ink sm:text-[38px]">
            <span className="text-accent">“</span>
            {c.tonight.questions[tonightIndex]}
            <span className="text-accent">”</span>
          </p>
          <p className="mt-5 text-[16px] text-muted">{c.tonight.after}</p>
          <div className="mt-9 flex items-center gap-6" data-cta>
            <AppStoreButton label={c.badge} />
            <ScanCode label={c.hero.scan} />
          </div>

          <nav className="mt-16 flex items-center gap-2 text-[13px] font-semibold text-faint">
            {LANGS.map((code, i) => (
              <span key={code} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#e6d9dd]">·</span>}
                <a href={`/?lang=${code}`} className={code === lang ? "text-ink" : "hover:text-muted"}>
                  {LANG_NAME[code]}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </section>

      <StickyCta title="KnowUsBetter" sub={`${c.free} · iPhone`} cta={c.get} />
    </div>
  );
}
