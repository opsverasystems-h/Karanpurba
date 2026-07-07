"use client";

import { offers } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Offers() {
  return (
    <section
      id="offers"
      className="relative border-t border-line bg-paper-band py-20 md:py-28"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Work with Karan</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Ways to work together
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl bg-paper-card p-8 transition-all duration-300 ${
                  o.featured
                    ? "border-2 border-gold-500 shadow-[0_24px_60px_-34px_rgba(28,26,22,0.4)]"
                    : "border border-line hover:border-gold-400/60"
                }`}
              >
                {o.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-400 px-3 py-1 text-xs font-medium text-ink">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">
                  {o.name}
                </h3>
                <div className="mt-1 text-sm text-gold-600">{o.price}</div>
                <p className="mt-4 text-sm text-ink-soft">{o.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-ink">
                      <span className="text-gold-600">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
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
