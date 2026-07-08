# Karan Purba — Personal Brand Site

Light editorial personal brand & funnel site for Karan Purba, Financial Consultant & Coach. Built by Opsvera.

## Stack
- Next.js 14 (App Router) + TypeScript, **static export** (`output: "export"`)
- Tailwind CSS (warm ivory "paper" + ink + gold design tokens)
- Fraunces (serif display) + Inter (body) via next/font
- Framer Motion (scroll reveals + hero motion)

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

## Editing content
All copy, stats, testimonials, offers, video testimonials, Instagram reels and
social handles live in [`lib/content.ts`](lib/content.ts). Swap the placeholders
there — no component edits needed.

## Sections
Hero → social-proof marquee → two doors (plan / build) → About (first person) →
proof wall → video testimonials → Instagram reels → offers → booking → final CTA
→ footer, plus a mobile sticky CTA.

## Deploy — Cloudflare Pages
The site builds to a fully static `out/` folder, so Cloudflare Pages serves it
straight from the CDN (no server, generous free tier).

**Connect the repo (recommended — auto-deploy on push):**
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick the `opsverasystems-h/Karanpurba` repo.
3. Build settings:
   - **Framework preset:** Next.js (Static HTML) — or "None".
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 18 or 20 (set env var `NODE_VERSION=20` if needed).
4. Save & Deploy. Every push to `main` redeploys.

**Or one-off manual deploy (no repo connection):**
```bash
npm run build
npx wrangler pages deploy out --project-name karanpurba
```

## TODO before launch
- [ ] Confirm Karan's real About details (timeline / background)
- [ ] Add YouTube/Vimeo video testimonial links → `videoTestimonials`
- [ ] Add Instagram reel links → `reels`
- [ ] Confirm real social follower numbers → `socials`
- [ ] Wire the booking `url` (Google Appointment Schedule / Calendly)
- [ ] Swap in a higher-res signature if available
