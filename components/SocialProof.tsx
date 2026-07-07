"use client";

import { socials } from "@/lib/content";

export function SocialProof() {
  const items = [
    "Education-first",
    "200+ advisors mentored",
    "3,000+ families guided",
    "5.0 ★ Google reviews",
    "People-first philosophy",
    ...socials.map((s) => `${s.platform} · ${s.handle}`),
  ];
  const loop = [...items, ...items];

  return (
    <section className="border-y border-line bg-paper-band py-5">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {loop.map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm text-ink-soft"
            >
              <span className="text-gold-500">◆</span>
              {label}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-band to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-band to-transparent" />
      </div>
    </section>
  );
}
