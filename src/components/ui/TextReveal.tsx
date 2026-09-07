import { useLayoutEffect, useRef, type ElementType } from "react";
import { gsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

export interface RevealLine {
  text: string;
  className?: string;
}

/**
 * Vertical-only mask: hides the slide-in from below while letting the line
 * overflow its column horizontally (editorial style, like the reference).
 * Negative insets keep tight-leading glyphs intact.
 */
const LINE_MASK = "inset(-0.25em -50vw -0.1em -50vw)";

/**
 * Editorial line-mask reveal: each declared line rises from behind a mask.
 * Lines are pre-declared (no runtime text measurement); long lines may wrap
 * naturally on small screens. transform-only; reduced motion renders visible.
 */
export function TextReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClass,
  delay = 0,
  stagger = 0.09,
  immediate = false,
}: {
  lines: RevealLine[];
  as?: ElementType;
  className?: string;
  lineClass?: string;
  delay?: number;
  stagger?: number;
  /** For above-the-fold headings: animate on mount, not on scroll. */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const inner = ref.current.querySelectorAll<HTMLElement>("[data-tr-line]");

    const ctx = gsap.context(() => {
      gsap.from(inner, {
        yPercent: 125,
        duration: 1.1,
        ease: "power4.out",
        delay,
        stagger,
        ...(immediate
          ? {}
          : { scrollTrigger: { trigger: ref.current, start: "top 86%", once: true } }),
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced, delay, stagger, immediate]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block" style={{ clipPath: LINE_MASK }}>
          <span
            data-tr-line
            className={`block will-change-transform ${line.className ?? ""} ${lineClass ?? ""}`}
          >
            {line.text}
          </span>
        </span>
      ))}
    </Tag>
  );
}
