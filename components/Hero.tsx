"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";
import { CountUp } from "./CountUp";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, #d4af37, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />

      <div className="container-site relative grid items-center gap-12 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pb-24">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Financial Consultant &amp; Coach
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-bone sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Build real wealth —
            <br />
            without the
            <br />
            <span className="gold-text">sales pitch.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-bone-muted"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            I&apos;ve mentored 200+ advisors and guided 3,000+ families to
            financial clarity. Whether you&apos;re planning your future or
            building your practice — start here.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <a href="#doors" className="btn-gold">
              Plan your future <span aria-hidden>→</span>
            </a>
            <a href="#doors" className="btn-ghost">
              Build your business
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <div className="absolute -inset-3 rounded-[28px] border border-gold-400/30" />
          <div className="relative flex aspect-[3/4] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-ink-500 bg-gradient-to-b from-ink-700 to-ink-900">
            <span className="text-4xl text-ink-500">◆</span>
            <span className="text-sm text-bone-dim">Pro photo of Karan</span>
            <span className="absolute bottom-4 right-4 rounded-full border border-gold-400/40 bg-ink-900/70 px-3 py-1 text-xs text-gold-200">
              Vancouver, Canada
            </span>
          </div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        className="container-site relative"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32, ease }}
      >
        <div className="grid grid-cols-2 gap-3 border-t border-ink-500/70 pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-gold-400 md:text-4xl">
                {s.star && <span className="mr-1">★</span>}
                <CountUp value={s.value} />
              </div>
              <div className="mt-1 text-sm text-bone-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
