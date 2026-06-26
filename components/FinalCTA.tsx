"use client";

import { brand } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="container-site py-20 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-gold-400/30 bg-ink-700/50 px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)",
            }}
          />
          <p className="eyebrow relative">Your move</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-bone md:text-6xl">
            Let&apos;s build your <span className="gold-text">financial future.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-bone-muted">
            Book a free, no-pressure call. We&apos;ll figure out the right path —
            whether you&apos;re planning or building.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${brand.email}`} className="btn-gold">
              Book a call <span aria-hidden>→</span>
            </a>
            <a href="#offers" className="btn-ghost">
              See the programs
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
