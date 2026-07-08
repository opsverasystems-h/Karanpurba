"use client";

import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="container-site py-20 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-center md:px-16 md:py-24">
          {/* Event-photo backdrop (dark-overlaid so text stays legible) */}
          <img
            src="/photos/karan-stage.webp"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
            style={{
              background: "radial-gradient(closest-side, #c6a23c, transparent)",
            }}
          />
          <p className="eyebrow relative text-gold-300">Your move</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-paper md:text-6xl">
            Let&apos;s build your{" "}
            <span className="font-normal italic text-gold-300">
              financial future.
            </span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-paper/70">
            Book a free, no-pressure call. We&apos;ll figure out the right path —
            whether you&apos;re planning or building.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:bg-gold-300 active:scale-[0.98]"
            >
              Book a call <span aria-hidden>→</span>
            </a>
            <a
              href="#offers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper transition-all duration-200 hover:border-paper/60 active:scale-[0.98]"
            >
              See the programs
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
