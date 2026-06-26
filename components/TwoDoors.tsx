"use client";

import { doors } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TwoDoors() {
  return (
    <section id="doors" className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Two paths, one mentor</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-bone md:text-5xl">
          Where do you want to start?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-bone-muted">
          Karan works with two kinds of people. Pick the door that fits you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {doors.map((door, i) => (
          <Reveal key={door.id} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-500/80 bg-ink-700/50 p-8 transition-all duration-300 hover:border-gold-400/50 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent)",
                }}
              />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                {door.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-bone md:text-3xl">
                {door.title}
              </h3>
              <p className="mt-3 text-bone-muted">{door.blurb}</p>
              <ul className="mt-6 space-y-3">
                {door.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-bone">
                    <span className="mt-0.5 text-gold-400">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-gold mt-8">
                {door.cta} <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
