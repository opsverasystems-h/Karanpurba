"use client";

import { useState } from "react";
import { academy } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Skool() {
  const [imgOk, setImgOk] = useState(true);
  const href = academy.skoolUrl || "#contact";

  return (
    <section className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Inside the community</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          A room full of people doing it right
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          Live trainings, a resource vault, and a network that keeps you
          accountable - all in one place on Skool.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
        <a
          href={href}
          className="group block overflow-hidden rounded-3xl border border-line bg-paper-card"
        >
          {academy.skoolImage && imgOk ? (
            <img
              src={academy.skoolImage}
              alt="Karan's Wealth Academy community on Skool"
              className="w-full"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-4 border border-dashed border-line-strong bg-paper-deep px-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 text-2xl text-gold-600">
                ⧉
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                Skool community preview
              </h3>
              <p className="max-w-md text-sm text-ink-soft">
                Add a screenshot of the Skool community at{" "}
                <code className="rounded bg-paper px-1.5 py-0.5 text-ink">
                  public/photos/skool.webp
                </code>{" "}
                and it&apos;ll show here.
              </p>
            </div>
          )}
        </a>
      </Reveal>
    </section>
  );
}
