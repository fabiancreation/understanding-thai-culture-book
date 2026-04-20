"use client";
import { unwrittenLaws } from "@/content/unwritten-laws";
import { copy } from "@/content/copy";

// Show three teasable laws before the email gate.
const previewIds = [1, 7, 10];

export function UnwrittenLawsPreview() {
  const teaser = unwrittenLaws.filter((l) => previewIds.includes(l.number));
  return (
    <div className="border border-saffron-400/30 bg-ink-900/40 p-5 sm:p-7">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-saffron-400">
        {copy.sample.teaserHeading}
      </p>
      <ul className="mt-4 space-y-4">
        {teaser.map((law) => (
          <li key={law.number} className="flex items-baseline gap-4">
            <span
              className="font-display shrink-0 text-[1.35rem] leading-none tracking-[-0.02em] text-saffron-400 sm:text-[1.55rem]"
              style={{ fontVariationSettings: "'opsz' 96" }}
            >
              {String(law.number).padStart(2, "0")}
            </span>
            <span className="font-display text-[1rem] leading-snug tracking-[-0.005em] text-paper-50 sm:text-[1.1rem]">
              {law.title}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-200/70">
        + seven more in the free PDF
      </p>
    </div>
  );
}
