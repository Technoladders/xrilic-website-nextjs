"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades elements in as they scroll into view. Mark any element with `data-reveal` (optionally
 * `data-reveal="120"` for a delay in ms). The hidden state only applies once the `js` class is on <html>
 * (set in app/layout.tsx), so the page is fully visible without JavaScript or with reduced motion.
 */
export default function ScrollReveal() {
  const path = usePathname();

  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")];
    els.forEach((e) => {
      const d = Number(e.dataset.reveal);
      if (d) e.style.transitionDelay = `${d}ms`;
    });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.setAttribute("data-revealed", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.setAttribute("data-revealed", "");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [path]);

  return null;
}
