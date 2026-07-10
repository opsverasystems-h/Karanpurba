"use client";

// Static signature mark (no animation).
export function Signature({
  className = "",
  alt = "Karan Purba signature",
  ariaHidden = false,
  // kept for call-site compatibility; no longer used
  duration,
  delay,
}: {
  className?: string;
  alt?: string;
  ariaHidden?: boolean;
  duration?: number;
  delay?: number;
}) {
  void duration;
  void delay;
  return (
    <img
      src="/signature.png"
      alt={alt}
      aria-hidden={ariaHidden}
      draggable={false}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      className={`select-none object-contain ${className}`}
    />
  );
}
