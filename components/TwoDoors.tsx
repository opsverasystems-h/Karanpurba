"use client";

import { doors } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TwoDoors() {
  return (
    <section id="doors" className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Two paths, one mentor</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          Where do you want to start?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          Karan works with two kinds of people. Pick the door that fits you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {doors.map((door, i) => (
          <Reveal key={door.id} delay={i * 0.08} className="h-full">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper-card p-8 transition-all duration-300 hover:border-gold-400/60 hover:shadow-[0_20px_50px_-30px_rgba(28,26,22,0.35)] md:p-10">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                {door.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                {door.title}
              </h3>
              <p className="mt-3 text-ink-soft">{door.blurb}</p>
              <ul className="mt-6 space-y-3">
                {door.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 text-gold-600">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a href={door.href} className="btn-gold">
                  {door.cta} <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
