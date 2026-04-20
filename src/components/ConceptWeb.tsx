"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import { concepts, parts, type Concept, type Part } from "@/content/concepts";
import { copy } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const partPalette: Record<Part, { node: string; ring: string; label: string }> = {
  I: { node: "#3d6950", ring: "#5a8a6f", label: "Jade · Foundation" },
  II: { node: "#b8821a", ring: "#e7a82a", label: "Saffron · How Thailand Works" },
  III: { node: "#b76a57", ring: "#de9480", label: "Blush · Thailand in Motion" },
};

export function ConceptWeb() {
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const open = (id: string) => {
    setActive(id);
    trackEvent("atlas_pin_open", { concept: id });
  };

  const activeConcept = active ? concepts.find((c) => c.id === active) : null;

  const grouped: Record<Part, Concept[]> = { I: [], II: [], III: [] };
  concepts.forEach((c) => grouped[c.part].push(c));

  return (
    <section id="concepts" className="relative bg-paper-100 paper-grain">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.12)}
          className="mb-14 max-w-[62ch] sm:mb-20"
        >
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.28em] text-jade-700">
            {copy.concepts.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-jade my-5 w-12 sm:my-6" />
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em] text-ink-950 sm:text-[2.6rem] md:text-[3.4rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.concepts.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 font-serif text-[16px] leading-relaxed text-ink-800 sm:mt-6 sm:text-[17px]"
          >
            {copy.concepts.description}
          </motion.p>
        </motion.div>

        {/* Desktop: SVG concept web; Mobile: vertical accordion */}
        <div className="hidden lg:block">
          <ConceptWebSVG hovered={hovered} onHover={setHovered} onOpen={open} />
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
            {(Object.keys(parts) as Part[]).map((p) => (
              <span key={p} className="inline-flex items-center gap-2">
                <span
                  className="h-[10px] w-[10px] rounded-full"
                  style={{ backgroundColor: partPalette[p].node }}
                />
                <span>
                  Part {p} · {parts[p].title}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <Accordion.Root type="multiple" className="flex flex-col gap-3">
            {(Object.keys(grouped) as Part[]).map((p) => (
              <div key={p} className="flex flex-col gap-3">
                <div className="mt-6 mb-2 flex items-baseline gap-3 first:mt-0">
                  <span
                    className="font-display text-[2rem] leading-none tracking-[-0.03em]"
                    style={{ color: partPalette[p].node, fontVariationSettings: "'opsz' 144" }}
                  >
                    {p}.
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-700">
                      Part {p}
                    </div>
                    <div className="font-display text-[1.15rem] leading-tight tracking-[-0.01em] text-ink-950">
                      {parts[p].title}
                    </div>
                  </div>
                </div>
                {grouped[p].map((c) => (
                  <Accordion.Item
                    key={c.id}
                    value={c.id}
                    className="group/item relative overflow-hidden border border-paper-200 bg-paper-50 transition-all data-[state=open]:border-jade-500/40 data-[state=open]:shadow-[0_12px_32px_-16px_rgba(58,105,80,0.3)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-full w-[4px] origin-top scale-y-0 transition-transform duration-300 group-data-[state=open]/item:scale-y-100"
                      style={{ backgroundColor: partPalette[p].node }}
                    />
                    <Accordion.Header>
                      <Accordion.Trigger className="group/t flex w-full items-start justify-between gap-4 px-4 py-5 text-left">
                        <div className="flex-1">
                          <div
                            className="font-mono text-[10px] uppercase tracking-[0.22em]"
                            style={{ color: partPalette[p].node }}
                          >
                            {c.roman}
                            <span className="text-ink-700/60"> · {c.thai}</span>
                          </div>
                          <div
                            className="font-display mt-1 text-[1.15rem] leading-snug tracking-[-0.005em] text-ink-950"
                            style={{ fontVariationSettings: "'opsz' 72" }}
                          >
                            {c.tagline}
                          </div>
                        </div>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-900/20 text-ink-900 transition-all duration-300 group-data-[state=open]/item:rotate-45 group-data-[state=open]/item:border-jade-500 group-data-[state=open]/item:bg-jade-500 group-data-[state=open]/item:text-paper-50">
                          <Plus size={14} strokeWidth={2} />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion-content overflow-hidden">
                      <div className="px-4 pb-6">
                        <p className="font-serif text-[16px] leading-[1.7] text-ink-800">{c.teaser}</p>
                        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700/70">
                          from {c.chapter}
                        </p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </div>
            ))}
          </Accordion.Root>
        </div>
      </div>

      <ConceptDialog
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
        concept={activeConcept ?? null}
      />
    </section>
  );
}

function ConceptWebSVG({
  hovered,
  onHover,
  onOpen,
}: {
  hovered: string | null;
  onHover: (id: string | null) => void;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[900px] overflow-hidden bg-paper-50 p-4 shadow-[0_20px_50px_-25px_rgba(28,20,14,0.2)]">
      <svg viewBox="0 0 1000 1000" className="h-auto w-full">
        <defs>
          <radialGradient id="cosmology-wash" cx="50%" cy="62%" r="55%">
            <stop offset="0%" stopColor="#1f2547" stopOpacity="0" />
            <stop offset="70%" stopColor="#1f2547" stopOpacity="0" />
            <stop offset="100%" stopColor="#1f2547" stopOpacity="0.09" />
          </radialGradient>
          <pattern id="cgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbb385" strokeWidth="0.3" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="#faf3e4" />
        <rect width="1000" height="1000" fill="url(#cgrid)" />
        <rect width="1000" height="1000" fill="url(#cosmology-wash)" />

        {/* Three concentric arcs */}
        <g fill="none" strokeDasharray="3 5" opacity="0.35">
          <circle cx="500" cy="620" r="170" stroke="#3d6950" strokeWidth="1.1" />
          <circle cx="500" cy="620" r="310" stroke="#b8821a" strokeWidth="1.1" />
          <circle cx="500" cy="620" r="440" stroke="#b76a57" strokeWidth="1.1" />
        </g>

        {/* Arc labels */}
        <text
          x="500"
          y="440"
          textAnchor="middle"
          fill="#2a4e3a"
          fontFamily="var(--font-plex-mono)"
          fontSize="11"
          letterSpacing="5"
          fontWeight="600"
        >
          I · FOUNDATION
        </text>
        <text
          x="500"
          y="300"
          textAnchor="middle"
          fill="#b8821a"
          fontFamily="var(--font-plex-mono)"
          fontSize="11"
          letterSpacing="5"
          fontWeight="600"
        >
          II · HOW THAILAND WORKS
        </text>
        <text
          x="500"
          y="168"
          textAnchor="middle"
          fill="#b76a57"
          fontFamily="var(--font-plex-mono)"
          fontSize="11"
          letterSpacing="5"
          fontWeight="600"
        >
          III · THAILAND IN MOTION
        </text>

        {/* The system center */}
        <g transform="translate(500, 620)">
          <circle r="4" fill="#2a201a" />
          <text
            y="28"
            textAnchor="middle"
            fill="#2a201a"
            fontFamily="var(--font-plex-mono)"
            fontSize="10"
            letterSpacing="4"
          >
            THE SYSTEM
          </text>
        </g>

        {/* Nodes */}
        {concepts.map((c) => {
          const isHover = hovered === c.id;
          const p = partPalette[c.part];
          return (
            <g
              key={c.id}
              transform={`translate(${c.x},${c.y})`}
              className="cursor-pointer"
              onMouseEnter={() => onHover(c.id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onOpen(c.id)}
            >
              {/* Halo */}
              <circle
                r={isHover ? 30 : 18}
                fill={p.ring}
                opacity={isHover ? 0.2 : 0.1}
                className="transition-all duration-300"
              />
              {/* Pin body */}
              <circle
                r={isHover ? 13 : 10}
                fill={p.node}
                stroke="#faf3e4"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              {/* Label underneath */}
              <text
                x="0"
                y="34"
                textAnchor="middle"
                fill="#1c140e"
                fontFamily="var(--font-fraunces)"
                fontSize={isHover ? "18" : "15"}
                fontStyle="italic"
                className="pointer-events-none transition-all duration-300"
                fontWeight="500"
              >
                {c.roman}
              </text>
              {/* Thai script */}
              <text
                x="0"
                y="52"
                textAnchor="middle"
                fill="#5a4a3d"
                fontFamily="var(--font-noto-thai)"
                fontSize="12"
                className="pointer-events-none"
              >
                {c.thai}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.24em] text-ink-700/70">
        Click any concept · thirteen nodes
      </div>
    </div>
  );
}

function ConceptDialog({
  open,
  onOpenChange,
  concept,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  concept: Concept | null;
}) {
  const accent = concept ? partPalette[concept.part] : partPalette.I;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-ink-950/55 data-[state=open]:animate-[fadeIn_200ms_ease]" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-[100] max-h-[85vh] w-[92vw] max-w-[780px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border-t-4 bg-paper-50 p-6 shadow-[0_40px_80px_-20px_rgba(28,20,14,0.5)] focus:outline-none sm:p-8 md:p-12"
          style={{ borderTopColor: accent.node }}
        >
          {concept ? (
            <>
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: accent.node }}
                  >
                    Part {concept.part} · Chapter {concept.chapterNumber} · {concept.chapter}
                  </p>
                  <hr className="my-4 w-10 border-t-2" style={{ borderColor: accent.node }} />
                  <Dialog.Title
                    className="font-display text-[1.9rem] leading-tight tracking-[-0.02em] text-ink-950 sm:text-[2.4rem] md:text-[2.8rem]"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {concept.roman}
                  </Dialog.Title>
                  <p className="mt-2 font-serif text-[16px] italic text-ink-700">
                    <span className="font-thai text-[17px]" style={{ fontFamily: "var(--font-thai)" }}>
                      {concept.thai}
                    </span>{" "}
                    · {concept.translation}
                  </p>
                </div>
                <Dialog.Close
                  aria-label="Close"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink-900/20 text-ink-900 transition hover:border-jade-500 hover:text-jade-700"
                >
                  <X size={18} />
                </Dialog.Close>
              </div>

              <div className="mt-6 border-l-2 pl-6 sm:mt-8" style={{ borderColor: accent.node }}>
                <p className="font-serif text-[17px] leading-[1.75] text-ink-900 sm:text-[18px] sm:leading-[1.8]">
                  {concept.teaser}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper-200 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700">
                  Full treatment in the book
                </span>
                <a
                  href="#buy"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex items-center gap-2 bg-jade-600 px-5 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-paper-50 transition hover:bg-jade-700"
                >
                  Read the book →
                </a>
              </div>
            </>
          ) : (
            <Dialog.Title className="sr-only">Concept teaser</Dialog.Title>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
