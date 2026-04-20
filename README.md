# Understanding Thai Culture — Landing Page

Standalone Next.js landing page for the anchor book of the *Understanding Thai Culture* series by Fabian Arndt. Volume I.

## Quickstart

```bash
npm install
cp .env.example .env.local   # fill in Lemon Squeezy + Resend keys
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
├── app/           layout, page, api routes, sitemap, robots, OG image
├── components/    all section components (hero, concept web, passage reel, etc.)
├── content/       typed content modules — single source of truth for copy
└── lib/           fonts, motion, Lemon Squeezy, Resend, analytics, JSON-LD
public/
├── cover.svg      typographic book cover (jade + saffron)
```

## Voice audit

Copy is held to the manuscript's styleguide:

```bash
npm run voice-audit
```

Zero em-dashes, zero AI vocabulary. See `CLAUDE.md`.

## Deployment

GitHub + Vercel. Push to `main` auto-deploys. Add env vars from `.env.example` to the Vercel dashboard.
