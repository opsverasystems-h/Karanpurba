import { brand, nav, socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-500/70 bg-ink-900 py-14">
      <div className="container-site grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="font-display text-lg font-bold tracking-[0.18em] text-bone">
            KARAN<span className="text-gold-400">.</span>PURBA
          </div>
          <p className="mt-3 max-w-xs text-sm text-bone-muted">
            {brand.role}. Education-first wealth building for families and
            advisors.
          </p>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-bone-dim">
            Explore
          </div>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="text-sm text-bone-muted transition-colors hover:text-gold-200"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-bone-dim">
            Follow
          </div>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.platform}>
                <span className="text-sm text-bone-muted">
                  {s.platform} · {s.handle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-500/60 pt-6 text-xs text-bone-dim md:flex-row">
        <span>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
        <span>
          Crafted by{" "}
          <a
            href="https://opsverasystems.ca"
            className="text-gold-300 transition-colors hover:text-gold-200"
          >
            Opsvera
          </a>
        </span>
      </div>
    </footer>
  );
}
