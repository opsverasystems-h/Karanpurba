"use client";

import { Reveal } from "./Reveal";

export function CtaBand({
  heading,
  button,
  href = "#contact",
}: {
  heading: string;
  button: string;
  href?: string;
}) {
  return (
    <section className="container-site py-10 md:py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 text-center md:px-16 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-56 w-[520px] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
            style={{
              background: "radial-gradient(closest-side, #c6a23c, transparent)",
            }}
          />
          <h3 className="relative mx-auto max-w-2xl font-display text-2xl font-semibold text-paper md:text-4xl">
            {heading}
          </h3>
          <a
            href={href}
            className="relative mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:bg-gold-300 active:scale-[0.98]"
          >
            {button} <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
