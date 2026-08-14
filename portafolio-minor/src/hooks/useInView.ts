import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-montion: reduce)",
  ).matches;

  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return { ref, inView };
}
