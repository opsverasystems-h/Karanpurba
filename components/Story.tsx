"use client";

import { story } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="story" className="relative border-y border-ink-500/60 bg-ink-800/30 py-20 md:py-28">
      <div className="container-site grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[28px] border border-gold-400/25" />
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-ink-500 bg-gradient-to-b from-ink-700 to-ink-900">
              <span className="text-3xl text-ink-500">▶</span>
              <span className="text-sm text-bone-dim">Story / speaking clip</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-bone md:text-[2.75rem]">
            {story.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-bone-muted">
            {story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-2 border-gold-400 pl-5 font-display text-xl font-medium italic text-bone">
            “{story.pull}”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
