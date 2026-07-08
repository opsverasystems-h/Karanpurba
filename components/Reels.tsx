"use client";

import { reels, instagramHandle } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Reels() {
  const hasReels = reels.length > 0;

  return (
    <section
      id="reels"
      className="border-t border-line bg-paper-band py-20 md:py-28"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Straight from Instagram</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            Reels &amp; reach
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Karan reaches thousands every week with education-first content.
            Here&apos;s a taste.
          </p>
          <a
            href={`https://www.instagram.com/${instagramHandle}/`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-600 transition-colors hover:text-gold-500"
          >
            @{instagramHandle} <span aria-hidden>↗</span>
          </a>
        </Reveal>

        {hasReels ? (
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {reels.map((r, i) => (
              <Reveal key={r.code} delay={i * 0.06}>
                <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-line bg-paper-card">
                  <iframe
                    src={`https://www.instagram.com/${r.type}/${r.code}/embed`}
                    title={r.caption || `Instagram ${r.type}`}
                    className="h-[560px] w-full border-0"
                    loading="lazy"
                    scrolling="no"
                    allowTransparency
                  />
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line-strong bg-paper-card px-6 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 text-2xl text-gold-600">
                ⧉
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                Coming soon
              </h3>
              <p className="max-w-md text-sm text-ink-soft">
                Karan&apos;s latest reels are on the way. In the meantime, follow
                along on Instagram for daily education-first content.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
