"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

// HiFive / online-reviews carousel widget (live Google reviews).
const BRAND_STYLE =
  "%7B%22sidebar_background%22%3A%22%23000033%22%2C%22sidebar_text%22%3A%22white%22%2C%22brand_button_text_color%22%3A%22%23FFCC00%22%2C%22brand_main_color%22%3A%22%23242526%22%2C%22brand_button_border_radius%22%3A%2210px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%23ffffff1a%22%2C%22brand_button_hover%22%3A%22rgb(41%2C%2043%2C%2044)%22%2C%22brand_button_active%22%3A%22rgb(31%2C%2031%2C%2032)%22%2C%22brand_main_color_opacity%22%3A%22%232425261a%22%2C%22brand_font%22%3A%22Nunito%22%2C%22star_color%22%3A%22%23FFCC00%22%2C%22brand_main_background%22%3A%22%23fafbfb%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fhifivestar.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.hifivestar.com%2Fpowered.png%22%7D";

export function GoogleReviews() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host || host.querySelector("script")) return; // guard double-inject
    const sc = document.createElement("script");
    sc.setAttribute("defer", "true");
    sc.setAttribute(
      "src",
      "https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1782779615114"
    );
    sc.setAttribute("theme", "light");
    sc.setAttribute("footer", "true");
    sc.setAttribute("widget-type", "carousel");
    sc.setAttribute("token", "6a430e09cab4cfb77e8bd613");
    sc.setAttribute("apiurl", "https://server.onlinereviews.tech/api/v0.0.9");
    sc.setAttribute("stats", "true");
    sc.setAttribute("addReview", "true");
    sc.setAttribute("profile-pic", "true");
    sc.setAttribute("review-name", "true");
    sc.setAttribute("positive-stars", "false");
    sc.setAttribute("wl", "true");
    sc.setAttribute(
      "wlndig",
      "https://go.hifivestar.com/karan-purba-services-inc"
    );
    sc.setAttribute("lang", "us");
    sc.setAttribute("brandStyle", BRAND_STYLE);
    host.appendChild(sc);

    // The HiFive carousel clips long reviews inside fixed-height cards with an
    // inner scrollbar. Expand the cards (inside its shadow DOM) so the full
    // review text shows and the inner sliders disappear.
    const CARD_H = 360; // uniform card height (a bit bigger than the default)
    const expand = () => {
      const shadow = host.querySelector<HTMLElement>("#id1")?.shadowRoot;
      const cards = shadow?.querySelectorAll<HTMLElement>('[class*="MuiCard-root"]');
      if (!cards || !cards.length) return false;
      // All cards the same fixed height, clipped (no inner scrollbars).
      cards.forEach((c) => {
        c.style.setProperty("height", `${CARD_H}px`, "important");
        c.style.setProperty("min-height", `${CARD_H}px`, "important");
        c.style.setProperty("max-height", `${CARD_H}px`, "important");
        c.style.setProperty("overflow", "hidden", "important");
      });
      // Remove the inner scrollbars so the card clips instead of scrolling.
      shadow?.querySelectorAll<HTMLElement>("*").forEach((el) => {
        const oy = getComputedStyle(el).overflowY;
        if (oy === "auto" || oy === "scroll") {
          el.style.setProperty("overflow", "hidden", "important");
          el.style.setProperty("max-height", "none", "important");
          el.style.setProperty("height", "auto", "important");
        }
      });
      return true;
    };

    let tries = 0;
    let observer: MutationObserver | null = null;
    const interval = setInterval(() => {
      tries += 1;
      if (expand()) {
        const shadow = host.querySelector<HTMLElement>("#id1")?.shadowRoot;
        if (shadow) {
          observer = new MutationObserver(() => expand());
          observer.observe(shadow, { childList: true, subtree: true });
        }
        clearInterval(interval);
      } else if (tries > 40) {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      observer?.disconnect();
    };
  }, []);

  return (
    <section id="reviews" className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Google reviews</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          What clients say
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-5xl">
        <div id="wid_1782779615114" ref={ref} />
      </Reveal>
    </section>
  );
}
