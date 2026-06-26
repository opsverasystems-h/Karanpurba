# Karan Purba — Personal Brand Site

Premium gold-on-black personal brand & funnel site for Karan Purba, Financial Consultant & Coach. Built by Opsvera.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom gold/ink design tokens)
- Framer Motion (scroll reveals + hero motion)
- Deploys on Netlify (`@netlify/plugin-nextjs`)

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content
All copy, stats, testimonials, offers and social handles live in [`lib/content.ts`](lib/content.ts).
Swap the placeholders (photo, video clip, social numbers, email) there — no component edits needed.

## Sections
Hero → social proof marquee → two doors (plan / build) → story → proof wall →
offers (Coaching · Wealth Academy · Plan Your Future) → final CTA → footer, plus a
mobile sticky CTA.

## TODO before launch
- [ ] Drop in real professional photos of Karan (hero + story)
- [ ] Add story / testimonial video clips
- [ ] Confirm real social follower numbers in `lib/content.ts`
- [ ] Wire the CTA to a real booking link (Calendly / form)
- [ ] Logo + favicon
