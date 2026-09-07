import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";
import { SECTION_IDS } from "../../lib/constants";

const SECTIONS = [
  { id: SECTION_IDS.hero, label: "01 · Identity" },
  { id: SECTION_IDS.manifesto, label: "02 · Manifesto" },
  { id: SECTION_IDS.work, label: "03 · Work" },
  { id: SECTION_IDS.services, label: "04 · Services" },
  { id: SECTION_IDS.about, label: "05 · About" },
  { id: SECTION_IDS.contact, label: "06 · Contact" },
] as const;

/**
 * Fixed right-rail progress indicator: chapter index + scroll fill line.
 * Hidden on mobile and for reduced-motion users.
 */
export function ScrollProgressRail() {
  const reduced = usePrefersReducedMotion();
  const fillRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = -1;

    const read = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (fillRef.current)
        fillRef.current.style.transform = `scaleY(${Math.max(0.02, p)})`;
      const idx = Math.min(SECTIONS.length - 1, Math.floor(p * SECTIONS.length));
      if (idx !== last && labelRef.current) {
        labelRef.current.textContent = SECTIONS[idx].label;
        last = idx;
      }
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
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
      aria-hidden="true"
    >
      <span ref={labelRef} className="font-mono text-[9px] tracking-widest2 text-noir-muted">
        01 · Identity
      </span>
      <span className="relative block h-40 w-px overflow-hidden bg-noir-border/60">
        <span
          ref={fillRef}
          className="absolute inset-x-0 top-0 h-full origin-top bg-noir-accent"
          style={{ transform: "scaleY(0.02)" }}
        />
      </span>
    </div>
  );
}
