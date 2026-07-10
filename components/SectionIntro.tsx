"use client";

import { Reveal } from "./Reveal";

export function SectionIntro({
  id,
  eyebrow,
  title,
  body,
  cta,
  ctaHref = "#contact",
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  ctaHref?: string;
}) {
  return (
    <section id={id} className="container-site py-20 text-center md:py-28">
      <Reveal className="mx-auto max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          {body}
        </p>
        <a href={ctaHref} className="btn-gold mt-8">
          {cta} <span aria-hidden>→</span>
        </a>
      </Reveal>
    </section>
  );
}
