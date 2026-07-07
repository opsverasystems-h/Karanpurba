import { brand, nav, socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-band py-14">
      <div className="container-site grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="font-display text-lg font-medium tracking-[0.16em] text-ink">
            KARAN<span className="text-gold-600">.</span>PURBA
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            {brand.role}. Education-first wealth building for families and
            advisors.
          </p>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
            Explore
          </div>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="text-sm text-ink-soft transition-colors hover:text-gold-600"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
            Follow
          </div>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.platform}>
                <span className="text-sm text-ink-soft">
                  {s.platform} · {s.handle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-mute md:flex-row">
        <span>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
        <span>
          Crafted by{" "}
          <a
            href="https://opsverasystems.ca"
            className="text-gold-600 transition-colors hover:text-gold-500"
          >
            Opsvera
          </a>
        </span>
      </div>
    </footer>
  );
}
