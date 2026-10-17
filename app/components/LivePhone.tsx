"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PartnerAvatar from "./PartnerAvatar";
import type { Copy, Lang } from "../content";

type Phase = "thinking" | "answered" | "picked";
const SEQUENCE: { phase: Phase; ms: number }[] = [
  { phase: "thinking", ms: 2600 },
  { phase: "answered", ms: 1100 },
  { phase: "picked", ms: 3600 },
];

const Check = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* The game screen with the partner's side playing out live on top of it:
   thinking, answered, then the shared pick on "B". */
export default function LivePhone({ lang, partner }: { lang: Lang; partner: Copy["hero"]["partner"] }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? 2 : 0);

  useEffect(() => {
    if (reduced) return;
    const timer = setTimeout(() => setStep((s) => (s + 1) % SEQUENCE.length), SEQUENCE[step].ms);
    return () => clearTimeout(timer);
  }, [step, reduced]);

  const phase = SEQUENCE[step].phase;
  const answered = phase !== "thinking";

  return (
    <div className="relative w-[272px] [container-type:inline-size] sm:w-[310px] lg:w-[340px]">
      {/* Box shadow rather than a drop-shadow filter: Safari re-rasterizes
          filtered layers when the pills above them animate. */}
      <div className="absolute inset-x-[0.8%] inset-y-[0.4%] rounded-[16.6%/7.7%] shadow-[0_50px_60px_-10px_rgba(74,24,38,0.22),0_16px_24px_-4px_rgba(74,24,38,0.12)]" />
      <Image
        src={`/screens/${lang}/game.webp`}
        alt=""
        width={720}
        height={1548}
        priority
        className="relative h-auto w-full select-none"
        draggable={false}
      />

      <AnimatePresence>
        {phase === "picked" && (
          <motion.div
            key="picked"
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
            className="absolute right-[9%] top-[54.6%] flex h-[7.4cqw] items-center gap-[1.6cqw] whitespace-nowrap rounded-full border border-match-border bg-white pl-[0.6cqw] pr-[2.8cqw] text-[3.2cqw] font-bold text-match-ink shadow-[0_6px_14px_rgba(22,163,74,0.18)]"
          >
            <PartnerAvatar className="h-[6.2cqw] w-[6.2cqw] !p-0" />
            <Check className="h-[3.2cqw] w-[3.2cqw] text-match" />
            {partner.picked}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-x-0 top-[83%] flex justify-center">
        <div
          className={`flex h-[11cqw] items-center gap-[2.4cqw] whitespace-nowrap rounded-full border pl-[1cqw] pr-[4cqw] shadow-[0_14px_30px_-8px_rgba(74,24,38,0.28),0_4px_10px_rgba(74,24,38,0.08)] transition-colors duration-300 ${
            answered ? "border-match-border bg-[#ecfdf3]" : "border-hairline bg-white"
          }`}
        >
          <span className="relative">
            <PartnerAvatar className="h-[8.6cqw] w-[8.6cqw]" />
            {answered && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -bottom-[0.6cqw] -right-[0.6cqw] flex h-[4cqw] w-[4cqw] items-center justify-center rounded-full border-2 border-white bg-match text-white"
              >
                <Check className="h-[2.2cqw] w-[2.2cqw]" />
              </motion.span>
            )}
          </span>
          <span className={`font-serif text-[4.4cqw] font-bold ${answered ? "text-match-ink" : "text-muted"}`}>
            {answered ? partner.answered : partner.thinking}
          </span>
          {!answered && (
            <span className="flex gap-[0.9cqw]" aria-hidden>
              {[0, 1, 2].map((i) => (
                <motion.i
                  key={i}
                  className="block h-[1.3cqw] w-[1.3cqw] rounded-full bg-faint"
                  animate={reduced ? undefined : { opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                />
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
