"use client";

import { planning } from "@/lib/content";
import { Reveal } from "./Reveal";

export function PlanningIncludes() {
  return (
    <section className="border-t border-line bg-paper-band py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What&apos;s included</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            A plan built around your life
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {planning.includes.map((item) => (
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
