"use client";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

// 13 smile strokes: varying curvature from sad/strained to broad/warm
const smileStrokes = [
  "M 10 50 Q 30 80 50 50",    // yim thang nam taa (so happy crying)
  "M 10 50 Q 30 68 50 50",    // yim cheun chom (admiration)
  "M 10 50 Q 30 62 50 50",    // yim thak thaai (greeting)
  "M 10 50 Q 30 58 50 50",    // fuen yim (forced)
  "M 10 50 Q 30 56 50 50",    // yim mai awk (can't)
  "M 10 50 Q 30 55 50 50",    // yim yae yae (nervous)
  "M 10 50 Q 30 52 50 50",    // yim haeng (dry)
  "M 10 50 Q 30 50 50 50",    // neutral line
  "M 10 50 Q 30 48 50 50",    // yim thak thaan (disagreement)
  "M 10 50 Q 30 45 50 50",    // yim soo (endurance)
  "M 10 50 Q 30 42 50 50",    // yim mee lessanai (concealed amusement)
  "M 10 50 Q 30 38 50 50",    // yim yaw (teasing)
  "M 10 50 Q 30 32 50 50",    // yim ruen reong (genuine joy)
];

export function ThirteenSmiles() {
  return (
    <section className="relative bg-paper-200/60 paper-grain">
      <hr className="hairline-jade absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-[900px] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger(0.12)}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-600"
          >
            {copy.smiles.eyebrow}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-[540px] items-center justify-between"
            aria-hidden
          >
            {smileStrokes.map((d, i) => (
              <svg
                key={i}
                viewBox="0 0 60 100"
                className="h-8 w-8 sm:h-10 sm:w-10"
                style={{
                  transform: `rotate(${(i - 6) * 0.5}deg)`,
                }}
              >
                <path
                  d={d}
                  fill="none"
                  stroke="#2a4e3a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            ))}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display mx-auto mt-10 max-w-[22ch] text-[1.9rem] leading-[1.15] tracking-[-0.02em] text-ink-950 sm:text-[2.3rem] md:text-[2.8rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.smiles.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-serif mx-auto mt-8 max-w-[60ch] text-[16.5px] leading-[1.8] text-ink-800 sm:text-[17.5px]"
          >
            {copy.smiles.body}
          </motion.p>
        </motion.div>
      </div>
      <hr className="hairline-jade absolute bottom-0 left-0 right-0" />
    </section>
  );
}
