"use client";

import { booking, brand } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Booking() {
  return (
    <section id="book" className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Book your spot</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          Schedule a call
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          Pick a time that works for you. No pressure - just a conversation
          about your next step, whether you&apos;re planning or building.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
        {booking.url ? (
          <div className="overflow-hidden rounded-3xl border border-gold-400/50 bg-white">
            <iframe
              src={booking.url}
              title="Book an appointment"
              className="h-[760px] w-full border-0 md:h-[700px]"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-paper-card px-6 py-16 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 text-2xl text-gold-600">
              ◷
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">
              Online booking opens soon
            </h3>
            <p className="max-w-sm text-sm text-ink-soft">
              The live scheduler ({booking.provider}) is being connected. In the
              meantime, reach out directly and Karan&apos;s team will get you
              booked.
            </p>
            <a href={`mailto:${brand.email}`} className="btn-gold mt-2">
              Email to book <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </Reveal>
    </section>
  );
}
