"use client";

import { story } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section
      id="about"
      className="relative border-y border-line bg-paper-band py-20 md:py-28"
    >
      <div className="container-site grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[28px] border border-gold-400/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-paper-deep">
              <img
                src="/photos/karan-speaking.webp"
                alt="Karan Purba speaking at an event"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-[2.75rem]">
            {story.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-2 border-gold-500 pl-5 font-display text-xl font-medium italic text-ink">
            “{story.pull}”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
