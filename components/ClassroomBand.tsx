"use client";

import { Reveal } from "./Reveal";

// Cinematic parallax band: the classroom photo stays fixed while the site
// content scrolls over it. Falls back to a normal cover image on mobile
// (where background-attachment: fixed is unreliable).
export function ClassroomBand() {
  return (
    <section
      aria-label="Karan teaching a class"
      className="relative flex min-h-[62vh] items-center justify-center bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: "url(/photos/classroom.webp)" }}
    >
      <div className="absolute inset-0 bg-ink/65" />
      <Reveal className="container-site relative text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold-300">
          In the room
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-paper md:text-5xl">
          Where education replaces the{" "}
          <span className="italic text-gold-300">sales pitch.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-paper/75">
          From lecture halls to living rooms — teaching the next generation of
          advisors and families how money actually works.
        </p>
      </Reveal>
    </section>
  );
}
