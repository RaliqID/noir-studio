/**
 * Scroll choreography for the hero sculpture.
 * EXACT parametric formulas from the Stitch reference (assets/landingpage.html),
 * piecewise-continuous in page progress p (0..1).
 */

const clampMin = (v: number, min: number) => Math.max(min, v);

/** Horizontal drift: right at hero, centered mid-page, drifting left at finale. */
const targetX = (p: number) => 1.2 * (1 - p * 2.2);

/** Vertical descent across the page. */
const targetY = (p: number) => -p * 1.5;

/** Depth: approaches camera until p=0.25, then recedes deep. */
const targetZ = (p: number) =>
  p < 0.25 ? (p / 0.25) * 2.0 : 2.0 - (p - 0.25) * 7.5;

/** Scale: grows toward manifesto (p=0.2), then shrinks to a distant monolith. */
const targetScale = (p: number) =>
  p < 0.2 ? 1.05 + p * 2.0 : clampMin(1.45 - (p - 0.2) * 1.6, 0.45);

/** Overall presence multiplier — the sculpture must dominate like the reference. */
export const PRESENCE = 1.35;

export interface StagePose {
  position: [number, number, number];
  scale: number;
}

export function computeStage(progress: number): StagePose {
  const p = Math.min(1, Math.max(0, progress));
  return {
    position: [targetX(p), targetY(p), targetZ(p)],
    scale: targetScale(p),
  };
}

/** Frame-rate independent damping factor. */
export const damp = (lambda: number, dt: number) => 1 - Math.exp(-lambda * dt);
