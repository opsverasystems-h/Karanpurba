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
    <section className="border-y border-ink-500/60 bg-ink-800/40 py-5">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {loop.map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm text-bone-muted"
            >
              <span className="text-gold-400">◆</span>
              {label}
            </span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      </div>
    </section>
  );
}
