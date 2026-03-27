import { useEffect } from "react";

export default function useRevealOnScroll({
  selector = "[data-reveal]",
  rootMargin = "0px 0px -100px 0px",
  threshold = 0.08,
  once = true,
} = {}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.add("revealed");
            if (once) obs.unobserve(el);
          } else if (!once) {
            el.classList.remove("revealed");
          }
        });
      },
      { rootMargin, threshold }
    );

    elements.forEach((el) => {
      el.classList.add("reveal-init");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, rootMargin, threshold, once]);
}
