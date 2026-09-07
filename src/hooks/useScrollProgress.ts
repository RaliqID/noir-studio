import { useEffect, useRef } from "react";

/**
 * Page scroll progress (0..1) stored in a ref, updated via rAF-throttled
 * scroll listener. Safe for frame loops; no re-renders.
 */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== 0) cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}
