"use client";

import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

export function ProofWall() {
  return (
    <section className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Proof, not promises</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          What people say
        </h2>
        <div className="mt-5 flex items-center justify-center gap-2 text-gold-500">
          <span className="text-lg tracking-widest">★★★★★</span>
          <span className="text-sm text-ink-mute">5.0 across Google reviews</span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper-card p-7">
              <div className="text-gold-500">★★★★★</div>
              <blockquote className="mt-4 flex-1 text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="text-sm font-medium text-ink">{t.name}</div>
                <div className="text-xs text-ink-mute">{t.detail}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
