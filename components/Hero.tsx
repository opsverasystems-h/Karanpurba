"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";
import { CountUp } from "./CountUp";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* warm ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[720px] rounded-full opacity-[0.5] blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(198,162,60,0.22), transparent 70%)",
        }}
      />

      <div className="container-site relative grid items-center gap-12 pb-16 md:grid-cols-[0.92fr_1.08fr] md:pb-24">
        <div className="md:order-2">
          <motion.p
            className="text-2xl font-bold uppercase tracking-[0.18em] text-gold-600 sm:text-3xl md:text-[2.5rem] md:leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Financial Consultant &amp; Coach
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[4.4rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Build real wealth
            <br />
            without the{" "}
            <span className="gold-text font-normal">sales pitch.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            I&apos;ve mentored 200+ advisors and guided 3,000+ families to
            financial clarity. Whether you&apos;re planning your future or
            building your practice - start here.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <a href="#planning" className="btn-gold">
              Plan your future <span aria-hidden>→</span>
            </a>
            <a href="#coach" className="btn-ghost">
              Build your business
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-sm md:order-1 md:ml-0 md:mr-auto"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <div className="absolute -inset-3 rounded-[28px] border border-gold-400/40" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-paper-deep">
            <img
              src="/photos/karan-hero.webp"
              alt="Karan Purba, Financial Consultant & Coach"
              className="absolute inset-0 h-full w-full object-cover object-[50%_62%]"
            />
            <span className="absolute bottom-4 right-4 rounded-full border border-line bg-paper/85 px-3 py-1 text-xs text-ink backdrop-blur-sm">
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
        <div className="grid grid-cols-2 gap-3 border-t border-line pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {s.star && <span className="mr-1 text-gold-500">★</span>}
                <CountUp value={s.value} />
              </div>
              <div className="mt-1 text-sm text-ink-mute">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
