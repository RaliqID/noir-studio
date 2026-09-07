import { useEffect, useRef } from "react";
import { usePrefersReducedMotion, useIsMobileViewport } from "../../hooks/useMediaQuery";

/**
 * Custom cursor: precise dot + trailing ring that expands over interactive targets.
 * Desktop-pointer devices only; disabled for touch and reduced-motion users.
 */
export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobileViewport();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || mobile) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let seen = false;
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let active = false;

    const show = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMove = (e: PointerEvent) => {
      if (!seen) {
        seen = true;
        mx = rx = e.clientX;
        my = ry = e.clientY;
        show();
      }
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      active = Boolean(t.closest("a, button, [data-cursor]"));
      ring.dataset.active = String(active);
    };

    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [reduced, mobile]);

  if (reduced || mobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-noir-accent opacity-0 transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        data-active="false"
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-noir-light/40 opacity-0 transition-[width,height,border-color,background-color,opacity] duration-200 data-[active=true]:h-12 data-[active=true]:w-12 data-[active=true]:border-noir-accent/70 data-[active=true]:bg-noir-accent/10"
      />
    </>
  );
}
