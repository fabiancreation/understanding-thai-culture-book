"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { glossary, glossaryStats } from "@/content/glossary";

export function Glossary() {
  return (
    <section id="vocabulary" className="relative bg-paper-200/70 paper-grain">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="mb-12 max-w-[62ch] sm:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-jade-700"
          >
            The vocabulary
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-jade my-5 w-12 sm:my-6" />
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em] text-ink-950 sm:text-[2.6rem] md:text-[3.2rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Every Thai term the book uses.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 font-serif text-[16px] leading-relaxed text-ink-800 sm:mt-6 sm:text-[17px]"
          >
            Each term appears in Thai script on first mention in the manuscript, with a
            transliteration that stays consistent across all chapters. This is the complete
            working vocabulary of the book, grouped by the chapter that introduces it.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700"
          >
            {glossaryStats.terms} terms · {glossaryStats.chapters} chapters · every entry traces to a
            line in the manuscript
          </motion.p>
        </motion.div>

        <div className="space-y-14 sm:space-y-16">
          {glossary.map((chapter) => (
            <motion.div
              key={chapter.chapterNumber}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger(0.05)}
            >
              <motion.div variants={fadeUp} className="mb-6 flex items-baseline gap-4 sm:mb-8">
                <span
                  className="font-display text-[2rem] leading-none tracking-[-0.03em] text-saffron-600 sm:text-[2.4rem]"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {String(chapter.chapterNumber).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-700">
                    Chapter {chapter.chapterNumber}
                  </div>
                  <div
                    className="font-display text-[1.2rem] leading-tight tracking-[-0.01em] text-ink-950 sm:text-[1.4rem]"
                    style={{ fontVariationSettings: "'opsz' 96" }}
                  >
                    {chapter.chapterTitle}
                  </div>
                  <div className="mt-1.5 font-serif text-[14px] italic leading-snug text-ink-700 sm:text-[15px]">
                    {chapter.blurb}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid gap-[1px] bg-paper-300/60 sm:grid-cols-2 lg:grid-cols-3"
              >
                {chapter.terms.map((term) => (
                  <div
                    key={term.roman}
                    className="group flex flex-col bg-paper-50 p-5 transition hover:bg-paper-100 sm:p-6"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span
                        className="font-display text-[1.3rem] leading-none italic tracking-[-0.01em] text-ink-950"
                        style={{ fontVariationSettings: "'opsz' 96" }}
                      >
                        {term.roman}
                      </span>
                      <span
                        className="font-thai shrink-0 text-[1.1rem] leading-none text-jade-700"
                        style={{ fontFamily: "var(--font-thai)" }}
                      >
                        {term.thai}
                      </span>
                    </div>
                    <p className="mt-3 font-serif text-[15px] leading-[1.55] text-ink-800">
                      {term.translation}
                    </p>
                    {term.note && (
                      <p className="mt-2 font-serif text-[13.5px] italic leading-[1.55] text-ink-700/80">
                        {term.note}
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-16 border-t border-paper-300 pt-8 text-center sm:mt-20"
        >
          <p className="mx-auto max-w-[56ch] font-serif text-[15px] leading-relaxed text-ink-700 sm:text-[16px]">
            The appendix adds twenty-five more phrases for travelers and residents, each set into a
            situation the book has already described. Every entry is introduced in the chapter that
            earns it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
