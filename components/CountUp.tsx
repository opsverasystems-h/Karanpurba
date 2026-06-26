"use client";

import { useEffect, useRef, useState } from "react";

function format(n: number, decimals: number, comma: boolean) {
  const fixed = n.toFixed(decimals);
  if (!comma) return fixed;
  const [int, dec] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${grouped}.${dec}` : grouped;
}

export function CountUp({
  value,
  duration = 1.6,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  // Split "3,000+" -> number "3,000" + suffix "+"
  const match = value.match(/^([\d.,]+)(.*)$/);
  const numStr = match ? match[1] : value;
  const suffix = match ? match[2] : "";
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const comma = numStr.includes(",");
  const target = parseFloat(numStr.replace(/,/g, "")) || 0;

  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (reduce) {
        setDisplay(target);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(target * eased);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(target);
      };
      requestAnimationFrame(tick);
      // Safety net: guarantee the final value lands even if rAF is throttled.
      setTimeout(() => setDisplay(target), duration * 1000 + 150);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {format(display, decimals, comma)}
      {suffix}
    </span>
  );
}
