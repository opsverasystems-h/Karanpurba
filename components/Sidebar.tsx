"use client";

import { useEffect, useState } from "react";
import { nav, instagramHandle } from "@/lib/content";
import { Signature } from "./Signature";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop: fixed left panel */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-line bg-paper-band px-7 py-9 lg:flex">
        <a href="#top" aria-label="Karan Purba - home" className="inline-block">
          <Signature
            className="h-12 w-auto opacity-90"
            delay={450}
            duration={2600}
          />
        </a>

        <nav className="mt-14 flex flex-col gap-5">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex-1" />

        <a
          href={`https://www.instagram.com/${instagramHandle}/`}
          className="mb-5 text-xs uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-gold-600"
        >
          @{instagramHandle}
        </a>
        <a href="#book" className="btn-gold w-full">
          Book a call
        </a>
      </aside>

      {/* Mobile: top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-paper/85 px-6 backdrop-blur-md lg:hidden">
        <a href="#top" aria-label="Karan Purba - home" className="inline-block">
          <Signature className="h-8 w-auto opacity-85" delay={450} duration={2600} />
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-ink"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-16 w-full border-b border-line bg-paper px-6 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink-soft"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="btn-gold mt-2"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
