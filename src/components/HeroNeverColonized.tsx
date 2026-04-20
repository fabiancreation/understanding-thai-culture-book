"use client";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/content/copy";
import { buildCheckoutUrl } from "@/lib/lemon-squeezy";
import { trackEvent } from "@/lib/analytics";
import { GrainOverlay } from "./GrainOverlay";

const line1Words = "Thailand is the country in Southeast Asia".split(" ");
const line2Words = "that was never colonized.".split(" ");

export function HeroNeverColonized() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden text-ink-950"
    >
      {/* Warm temple-interior backdrop: saffron + blush washes over warm cream */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.04 }}
          animate={reduce ? { scale: 1.04 } : { scale: 1.1 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 700px at 85% 20%, rgba(245,198,90,0.55), transparent 60%),
              radial-gradient(700px 500px at 15% 85%, rgba(240,184,165,0.5), transparent 65%),
              radial-gradient(1100px 600px at 50% 55%, rgba(90,138,111,0.22), transparent 70%),
              linear-gradient(180deg, #faf3e4 0%, #f2e7ce 55%, #f0b8a5 100%)
            `,
          }}
        />

        {/* Decorative temple-interior suggestion: a row of three arched doorways in saffron silhouette */}
        <svg
          aria-hidden
          viewBox="0 0 1600 900"
          className="absolute bottom-0 left-0 right-0 h-[40%] w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="arch-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d6950" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2a4e3a" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="floor-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a4e3a" stopOpacity="1" />
              <stop offset="100%" stopColor="#1c140e" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Floor */}
          <rect x="0" y="680" width="1600" height="220" fill="url(#floor-gradient)" />
          {/* Three Thai-style pointed arches */}
          <g fill="url(#arch-gradient)">
            <path d="M 80 680 L 80 440 Q 80 320 220 260 Q 360 320 360 440 L 360 680 Z M 130 680 L 130 460 Q 130 370 220 330 Q 310 370 310 460 L 310 680 Z" />
            <path d="M 620 680 L 620 380 Q 620 240 800 180 Q 980 240 980 380 L 980 680 Z M 680 680 L 680 400 Q 680 290 800 250 Q 920 290 920 400 L 920 680 Z" />
            <path d="M 1240 680 L 1240 440 Q 1240 320 1380 260 Q 1520 320 1520 440 L 1520 680 Z M 1290 680 L 1290 460 Q 1290 370 1380 330 Q 1470 370 1470 460 L 1470 680 Z" />
          </g>
          {/* Candle glows inside the central arch */}
          <g fill="#f5c65a" opacity="0.85">
            <circle cx="800" cy="520" r="6" />
            <ellipse cx="800" cy="518" rx="18" ry="30" fill="#f5c65a" opacity="0.18" />
          </g>
          <g fill="#e7a82a" opacity="0.7">
            <circle cx="220" cy="540" r="4" />
            <circle cx="1380" cy="540" r="4" />
          </g>
        </svg>

        <GrainOverlay opacity={0.08} />
      </div>

      {/* Top bar spacer */}
      <div className="h-16" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-6 sm:px-6 sm:pb-20 md:px-10 md:pb-28 md:pt-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-mono text-[10px] uppercase tracking-[0.32em] text-saffron-600 sm:text-[11px]"
        >
          {copy.hero.kicker}
        </motion.p>

        <h1
          className="font-display mt-5 max-w-[18ch] text-[clamp(2.5rem,10vw,6.5rem)] leading-[0.96] tracking-[-0.02em] text-ink-950 sm:mt-6"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 40" }}
        >
          <span aria-hidden className="block overflow-hidden">
            {line1Words.map((w, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ y: "0.9em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.22em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span aria-hidden className="block overflow-hidden">
            {line2Words.map((w, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ y: "0.9em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + (line1Words.length + i) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.22em] inline-block italic text-jade-700"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="sr-only">
            {copy.hero.grabberLine1} {copy.hero.grabberLine2}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2 + (line1Words.length + line2Words.length) * 0.07 + 0.2,
          }}
          className="font-serif mt-8 max-w-[44ch] text-[18px] leading-relaxed text-ink-800 sm:text-xl md:text-[1.375rem]"
        >
          <span className="font-display italic text-jade-700">{copy.hero.deck}</span>{" "}
          {copy.hero.subdeck}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={buildCheckoutUrl()}
            onClick={() => trackEvent("buy_click", { location: "hero" })}
            className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-jade-600 px-6 py-4 font-sans text-[12px] uppercase tracking-[0.2em] text-paper-50 shadow-[0_6px_28px_-8px_rgba(58,105,80,0.55)] transition hover:bg-jade-700 sm:px-7 sm:text-[13px]"
          >
            {copy.hero.primaryCta}
            <span aria-hidden className="translate-y-[1px] transition group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#sample"
            onClick={() => trackEvent("chapter_one_request", { location: "hero" })}
            className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-saffron-500 bg-paper-50/60 px-6 py-4 font-sans text-[12px] uppercase tracking-[0.2em] text-ink-900 backdrop-blur-sm transition hover:border-saffron-600 hover:bg-paper-50 sm:px-7 sm:text-[13px]"
          >
            {copy.hero.secondaryCta}
          </a>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-800/80 sm:mt-16 sm:gap-x-6">
          <span>11 chapters</span>
          <span className="h-px w-6 bg-ink-900/30 sm:w-8" />
          <span>~70,000 words</span>
          <span className="h-px w-6 bg-ink-900/30 sm:w-8" />
          <span>EPUB + PDF</span>
        </div>
      </div>
    </section>
  );
}
