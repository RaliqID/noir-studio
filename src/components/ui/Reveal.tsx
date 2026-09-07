import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

/**
 * Scroll-triggered entrance reveal. transform + opacity only,
 * ease-out, once. Reduced motion: content renders visible immediately.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced, delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
