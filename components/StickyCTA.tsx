"use client";

import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight - 700;
      setShow(y > 700 && y < max);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#book"
        className="btn-gold w-full max-w-md shadow-[0_8px_30px_-6px_rgba(0,0,0,0.7)]"
      >
        Book a call <span aria-hidden>→</span>
      </a>
    </div>
  );
}
