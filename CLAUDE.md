# Understanding Thai Culture — Landing Page (Volume I)

## Type
Standalone Next.js landing page for the anchor book of the *Understanding Thai Culture* series: **"Understanding Thai Culture — How Thailand Works, Not What to See"** by Fabian Arndt.

## Status
Initial build. Checkout runs in Lemon Squeezy test mode (placeholder URL) until the manuscript is publication-ready.

## Repo
- GitHub: `fabiancreation/understanding-thai-culture-book`
- Vercel: `fabiancreations-projects/understanding-thai-culture-book`
- Auto-deploy on push to `main`

## Stack
- Next.js 16.2.3 + React 19 + TypeScript 5
- Tailwind CSS 4 (`@theme inline` tokens)
- framer-motion, Radix Accordion + Dialog, lucide-react
- Resend (transactional email + audience)
- Lemon Squeezy (merchant of record; handles EU VAT)
- Vercel Analytics + Speed Insights

## Design direction — "Temple-warm"

Inherits the series family tokens (warm paper-50 background, warm brown inks never pure black, Fraunces / Source Serif 4 / Plex Sans / Plex Mono / Noto Serif Thai typography) and differentiates via the book's accent set:

| Role | Token | Hex |
|---|---|---|
| Primary | `jade-500` / `jade-700` | `#5a8a6f` / `#2a4e3a` |
| Signature | `saffron-500` | `#e7a82a` |
| Tertiary | `blush-500` | `#de9480` |
| Cosmology (1 moment) | `indigo-900` | `#1f2547` |

Universal family tokens (paper, ink, river, chili, brass) are retained so cross-series links tone-match.

Drop cap: jade-700. Selection highlight: saffron-500 on ink-950. Link hover: jade-600. Pull-quote marks: saffron-500.

## Voice rules (same as the manuscript)

All page copy in `src/content/*.ts` passes the manuscript's bar:
- Zero em-dashes (—)
- No AI vocabulary (crucial, pivotal, vibrant, bustling, hidden gem, tapestry, testament, furthermore, moreover, showcase, etc.)
- No promotional hype; the voice observes and offers
- Observation over instruction (no "you should", "make sure to")
- Concrete before abstract (named places, real scenes)

Run the voice audit before shipping any copy change:

```bash
npm run voice-audit
```

## Content sources

Typed modules, single source of truth:
- `src/content/copy.ts` — all page copy
- `src/content/concepts.ts` — 13 concept nodes for ConceptWeb, mapped to the three Parts
- `src/content/passages.ts` — 5 pinned passages
- `src/content/faq.ts` — 6 FAQ items
- `src/content/unwritten-laws.ts` — source of the "10 Unwritten Laws of Thailand" lead magnet

Manuscript: `/Users/fabianarndt/Projekte/Claude/Books/Understanding-Thai-Culture/manuskript/`. When the manuscript revises, re-sync `concepts.ts`, `passages.ts`, `unwritten-laws.ts`.

## Components

**New to this book:**
- `HeroNeverColonized` — word-mask display of the "never colonized" grabber
- `ConceptWeb` — SVG three-concentric-arc diagram, 13 concept nodes, Radix Dialog teasers, mobile accordion fallback
- `ThirteenSmiles` — callout band with 13 stroke SVGs of varying curvature
- `UnwrittenLawsPreview` — 3-law teaser used inside `SampleChapterGate`

**Shared shells with Bangkok (different content):**
- `Masthead`, `EditorialIntro`, `AuthorNote`, `StatBand`, `WhatYoullLearn`, `BuyCard`, `SampleChapterGate`, `SeriesContext`, `FAQ`, `FooterEditorial`, `PassageReel`, `ThaiTermLabel`, `GrainOverlay`, `BookCover3D`

## Conversion

- **Primary CTA:** `Buy · $14` → Lemon Squeezy hosted checkout (`NEXT_PUBLIC_LS_CHECKOUT_URL`).
- **Lead magnet:** *The Ten Unwritten Laws of Thailand* PDF, gated behind email capture. Delivered via Resend as styled HTML email (PDF attachment comes next — see NEXT_STEPS.md).
- **Newsletter:** footer subscribe → Resend audience `understanding-thai-culture-readers`.
- **Feature flag:** Buy button remains pointed at placeholder LS URL until the 17 remaining fact-checks in the manuscript are closed and the EPUB is uploaded. Newsletter + lead-magnet capture work immediately.

## Not yet done

See `NEXT_STEPS.md` for the full launch checklist. In brief: real Lemon Squeezy product, EPUB + PDF generation via pandoc, real author portrait, imprint + privacy pages, custom domain.

## Deployment

```bash
git push origin main     # auto-deploys to Vercel
```

Never commit `.env.local`. Only `.env.example` (placeholders) is in the repo.

## Output
`/Users/fabianarndt/Projekte/Claude/Web/Understanding-Thai-Culture-Book/Output/`

## What not to do

- Do not reuse Bangkok-Neighborhoods' brass/tamarind accents as primary. Jade leads this book.
- Do not introduce em-dashes anywhere; `npm run voice-audit` must return zero.
- Do not use pure black (`#000`) as dominant dark; the family palette uses warm browns (`ink-900: #2a201a`).
- Do not add testimonials until real ones exist. Specificity + prose quality carry trust.
- Do not rename the shared lib files (`motion.ts`, `fonts.ts`, etc.) without syncing to Bangkok if ever extracting a package.
