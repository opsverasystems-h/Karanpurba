"use client";

import { outcomes } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Outcomes() {
  return (
    <section id="outcomes" className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">What you&apos;ll achieve</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          Build your career the right way
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          Whether you&apos;re just starting out or scaling your practice -
          practical mentorship, proven systems, and real support.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.06}>
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
    </section>
  );
}
