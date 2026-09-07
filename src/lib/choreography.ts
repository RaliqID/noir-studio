/**
 * Scroll choreography for the hero sculpture.
 * User directive: the sculpture stays LARGE and CONSISTENT through the whole
 * page. Position may drift, apparent size must not shrink.
 */

/** Lateral drift: right at hero, centered mid-page, left at finale. */
const targetX = (p: number) => 1.2 * (1 - p * 2.2);

/** Gentle descent across the page. */
const targetY = (p: number) => -p * 1.0;

/**
 * Depth: minimal drift only, so apparent size stays constant.
 * (distance ratio p=0 -> p=1 is ~92%, visually equivalent.)
 */
const targetZ = (p: number) => 1.4 - 0.6 * p;

/** Constant dominant scale — never shrinks on scroll. */
const targetScale = () => 1.45;

export interface StagePose {
  position: [number, number, number];
  scale: number;
}

export function computeStage(progress: number): StagePose {
  const p = Math.min(1, Math.max(0, progress));
  return {
    position: [targetX(p), targetY(p), targetZ(p)],
    scale: targetScale(),
  };
}

/** Frame-rate independent damping factor. */
export const damp = (lambda: number, dt: number) => 1 - Math.exp(-lambda * dt);

/** Overall presence multiplier — the sculpture must dominate like the reference. */
export const PRESENCE = 1.35;
