"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "@/lib/content";
import { Signature } from "./Signature";

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <div className="flex items-center gap-2.5 md:gap-3.5">
          <a
            href="#top"
            className="flex font-display text-base font-medium tracking-[0.16em] text-ink"
            aria-label="Karan Purba"
          >
            <motion.span
              initial={{ x: -48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              KARAN
            </motion.span>
            <motion.span
              className="text-gold-600"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4, ease }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ x: 48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.22, ease }}
            >
              PURBA
            </motion.span>
          </a>
          <Signature
            className="h-7 w-auto opacity-80 md:h-8"
            delay={1000}
            duration={1400}
            ariaHidden
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#book" className="btn-gold !py-2.5 !px-5">
            Book a call
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-ink md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-soft"
              >
                {item.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
