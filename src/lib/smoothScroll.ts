import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "./gsap";
import { SECTION_IDS } from "./constants";

let lenis: Lenis | null = null;
let tickerRaf: ((time: number) => void) | null = null;
let anchorHandler: ((e: MouseEvent) => void) | null = null;

/** Header height used as anchor scroll offset. */
const HEADER_OFFSET = -84;

/**
 * Inertial smooth scrolling. Disabled for reduced-motion users
 * (native scroll + CSS scroll-behavior:auto applies there).
 * Wires Lenis into GSAP's ticker so ScrollTrigger stays in sync.
 */
export function initSmoothScroll(): void {
  if (lenis) return;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });

  lenis.on("scroll", ScrollTrigger.update);

  tickerRaf = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tickerRaf);
  gsap.ticker.lagSmoothing(0);

  // Smooth anchor navigation with fixed-header offset
  anchorHandler = (e: MouseEvent) => {
    if (!lenis) return;
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    lenis.scrollTo(el as HTMLElement, { offset: HEADER_OFFSET });
  };
  document.addEventListener("click", anchorHandler);

  // Re-measure after fonts/webfont layout settles
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

export function destroySmoothScroll(): void {
  if (tickerRaf) gsap.ticker.remove(tickerRaf);
  if (anchorHandler) document.removeEventListener("click", anchorHandler);
  lenis?.destroy();
  lenis = null;
  tickerRaf = null;
  anchorHandler = null;
}

export const SCROLL_TARGETS = SECTION_IDS;
