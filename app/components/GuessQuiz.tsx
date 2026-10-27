"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Copy } from "../content";
import { APP_STORE_URL, langPath, type Lang } from "../i18n";

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function GuessQuiz({ lang, copy }: { lang: Lang; copy: Copy["guess"] }) {
  const total = copy.questions.length;
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const done = index >= total;

  const choose = (option: number) => {
    if (picked !== null) return;
    setPicked(option);
    setTimeout(() => {
      setPicked(null);
      setIndex((i) => i + 1);
    }, 650);
  };

  const share = async () => {
    const url = `${window.location.origin}${langPath(lang)}`;
    if (navigator.share) {
      try {
        await navigator.share({ text: copy.shareText, url });
      } catch {}
      return;
    }
    await navigator.clipboard.writeText(`${copy.shareText} ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const question = copy.questions[Math.min(index, total - 1)];

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="mb-5 flex gap-1.5 px-1">
        {copy.questions.map((_, i) => (
          <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-track">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={false}
              animate={{ width: i < index || (i === index && picked !== null) ? "100%" : "0%" }}
              transition={{ duration: 0.45, ease }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!done ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="relative overflow-hidden rounded-[26px] border border-hairline bg-white px-6 pb-7 pt-6 text-center shadow-[0_24px_48px_-24px_rgba(74,24,38,0.22)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#fee4e6] to-transparent" />
              <div className="pointer-events-none absolute -bottom-12 -right-1 font-serif text-[150px] font-bold leading-none text-accent/[0.06]">?</div>
              <div className="relative text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                {copy.counter.replace("{n}", String(index + 1)).replace("{total}", String(total))}
              </div>
              <p className="relative mt-3 text-balance font-serif text-[23px] font-bold leading-[1.4] text-ink sm:text-[25px]">
                {question.text}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {question.options.map((option, i) => {
                const selected = picked === i;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => choose(i)}
                    className={`flex min-h-[56px] items-center gap-3.5 rounded-[18px] border px-4 text-left transition-all duration-200 ${
                      selected
                        ? "scale-[1.02] border-accent bg-accent-soft shadow-[0_14px_28px_-14px_rgba(201,75,106,0.5)]"
                        : "border-hairline bg-white shadow-[0_4px_12px_rgba(45,10,20,0.04)] hover:border-accent-border active:scale-[0.99]"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[12px] font-bold transition-colors ${
                        selected ? "border-accent bg-accent text-white" : "border-[#F3E3E7] bg-[#FFF7F8] text-muted"
                      }`}
                    >
                      {selected ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    <span className="text-[15px] font-bold text-ink">{option}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="relative overflow-hidden rounded-[26px] border border-accent-border bg-white px-6 pb-7 pt-8 text-center shadow-[0_30px_60px_-28px_rgba(201,75,106,0.45)]"
          >
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#fee4e6] to-transparent" />
            <div className="relative">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">{copy.doneEyebrow}</div>
              <h3
                className="headline mt-3 text-balance font-serif text-[27px] font-bold leading-[1.3] text-ink sm:text-[30px]"
                dangerouslySetInnerHTML={{ __html: copy.doneTitle }}
              />
              <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-relaxed text-muted">{copy.doneBody}</p>

              <div className="mt-7 flex flex-col gap-2.5">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center rounded-2xl bg-accent text-[16px] font-bold text-white shadow-[0_16px_30px_-14px_rgba(201,75,106,0.8)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {copy.play}
                </a>
                <button
                  type="button"
                  onClick={share}
                  className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-accent-border bg-white text-[15px] font-bold text-accent transition-colors hover:bg-accent-soft"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden>
                    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  {copied ? copy.copied : copy.send}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIndex(0)}
                className="mt-5 text-[13px] font-semibold text-faint underline-offset-4 hover:text-muted hover:underline"
              >
                {copy.restart}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
