"use client";

import { videoTestimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

function VideoCard({
  item,
}: {
  item: (typeof videoTestimonials)[number];
}) {
  const portrait = Boolean(item.src && !item.youtube && !item.vimeo);
  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-paper-card">
      <div
        className={`relative bg-paper-deep ${portrait ? "aspect-[9/16]" : "aspect-video"}`}
      >
        {item.youtube ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${item.youtube}`}
            title={`${item.name} testimonial`}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : item.vimeo ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://player.vimeo.com/video/${item.vimeo}`}
            title={`${item.name} testimonial`}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : item.src ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={item.src}
            poster={item.poster}
            controls
            preload="none"
          />
        ) : null}
      </div>
      <figcaption className="px-5 py-4">
        <div className="text-sm font-medium text-ink">{item.name}</div>
        <div className="text-xs text-ink-mute">{item.role}</div>
      </figcaption>
    </figure>
  );
}

export function VideoTestimonials() {
  const hasVideos = videoTestimonials.length > 0;

  return (
    <section id="testimonials" className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">In their words</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          Hear it from them
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          Real stories from the families and advisors Karan has worked with.
        </p>
      </Reveal>

      {hasVideos ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoTestimonials.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line-strong bg-paper-card px-6 py-16 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 text-2xl text-gold-600">
              ▶
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">
              Video testimonials go here
            </h3>
            <p className="max-w-md text-sm text-ink-soft">
              Upload each clip to YouTube or Vimeo (unlisted is fine) and share
              the links — or drop small mp4 files in{" "}
              <code className="rounded bg-paper-deep px-1.5 py-0.5 text-ink">
                public/videos
              </code>
              . They&apos;ll appear here as a clean video grid.
            </p>
          </div>
        </Reveal>
      )}
    </section>
  );
}
