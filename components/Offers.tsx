"use client";

import { offers } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Offers() {
  return (
    <section id="offers" className="relative border-t border-ink-500/60 bg-ink-800/30 py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Work with Karan</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-bone md:text-5xl">
            Ways to work together
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  o.featured
                    ? "border-2 border-gold-400/70 bg-ink-700/70"
                    : "border border-ink-500/80 bg-ink-700/40 hover:border-gold-400/40"
                }`}
              >
                {o.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-ink-900">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-bone">{o.name}</h3>
                <div className="mt-1 text-sm text-gold-400">{o.price}</div>
                <p className="mt-4 text-sm text-bone-muted">{o.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-bone">
                      <span className="text-gold-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 ${o.featured ? "btn-gold" : "btn-ghost"}`}
                >
                  {o.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
