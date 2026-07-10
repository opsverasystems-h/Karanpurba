"use client";

import { outcomes, coach } from "@/lib/content";
import { Reveal } from "./Reveal";

export function CoachContent() {
  return (
    <section className="border-t border-line bg-paper-band py-20 md:py-28">
      <div className="container-site">
        {/* What you'll achieve */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What you&apos;ll achieve</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Build your career the right way
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper-card p-7">
                <span className="font-display text-lg font-medium text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {o.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What you get */}
        <Reveal className="mx-auto mt-20 max-w-2xl text-center">
          <p className="eyebrow">What you get</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Everything included
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {coach.get.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-line pb-4 text-ink"
              >
                <span className="mt-0.5 text-gold-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
