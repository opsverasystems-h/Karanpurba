"use client";

import { useEffect, useRef, useState } from "react";

// Animated "being signed" signature: the ink is revealed left-to-right,
// like a hand writing it. Works on the transparent-ink PNG at any size.
export function Signature({
  className = "",
  duration = 1700,
  delay = 200,
  alt = "Karan Purba signature",
  ariaHidden = false,
}: {
  className?: string;
  duration?: number;
  delay?: number;
  alt?: string;
  ariaHidden?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setDrawn(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          timer = setTimeout(() => setDrawn(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    // Safety net: never leave the signature permanently hidden if the
    // observer is slow or unsupported.
    const fallback = setTimeout(() => setDrawn(true), delay + 3500);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <img
      ref={ref}
      src="/signature.png"
      alt={alt}
      aria-hidden={ariaHidden}
      draggable={false}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      className={`select-none object-contain ${className}`}
      style={{
        clipPath: drawn ? "inset(0 -2% 0 0)" : "inset(0 100% 0 0)",
        transition: instant
          ? "none"
          : `clip-path ${duration}ms cubic-bezier(0.7,0.05,0.3,1)`,
      }}
    />
  );
}
