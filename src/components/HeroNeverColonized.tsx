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
      {/* Warm sunrise-over-rice-field backdrop: saffron high-right + blush low-left, on warm cream */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.02 }}
          animate={reduce ? { scale: 1.02 } : { scale: 1.08 }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1100px 800px at 88% 12%, rgba(245,198,90,0.65), transparent 58%),
              radial-gradient(800px 600px at 8% 95%, rgba(240,184,165,0.45), transparent 62%),
              radial-gradient(1000px 700px at 45% 70%, rgba(90,138,111,0.18), transparent 72%),
              linear-gradient(180deg, #faf3e4 0%, #f6ecd3 50%, #eee0c1 100%)
            `,
          }}
        />

        {/* Single minimalist sun / lotus disc — sits off to the right, out of the text area */}
        <svg
          aria-hidden
          viewBox="0 0 1200 900"
          className="absolute right-0 top-0 hidden h-full w-[55%] md:block"
          preserveAspectRatio="xMaxYMid meet"
        >
          <defs>
            <radialGradient id="sun-disc" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5c65a" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#e7a82a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#e7a82a" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Glowing saffron disc */}
          <circle cx="830" cy="360" r="260" fill="url(#sun-disc)" />
          {/* Thin jade ring around it */}
          <circle
            cx="830"
            cy="360"
            r="185"
            fill="none"
            stroke="#3d6950"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          {/* Faint horizon line */}
          <line
            x1="0"
            y1="620"
            x2="1200"
            y2="620"
            stroke="#946525"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="2 8"
          />
        </svg>

        {/* Subtle paper grain */}
        <GrainOverlay opacity={0.05} />
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
