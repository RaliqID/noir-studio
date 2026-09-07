/**
 * Centralized design + motion constants.
 * Single source of truth for the 3D choreography shared by DOM and WebGL layers.
 */

export const COLORS = {
  bg: "#08080a",
  surface: "#0f0f13",
  card: "#141419",
  border: "#23232b",
  muted: "#7e7e8d",
  light: "#eaebee",
  accent: "#34d399",
  sculptureBody: "#161618",
  sculptureEmissive: "#050507",
  wire: "#484852",
  ringBright: "#a3a3b0",
  ringDim: "#6e6e7d",
  node: "#d4d4dc",
  keyLight: "#f0f2f8",
  rimLight: "#6ee7b7",
  fillLight: "#38384a",
} as const;

/** Scroll keyframe choreography lives in lib/choreography.ts (exact reference formulas). */

export const CAMERA = {
  fov: 45,
  near: 0.1,
  far: 1000,
  z: 8,
} as const;

export const MOTION = {
  /** damping factor per frame for pointer tracking */
  pointerDamping: 0.05,
  /** damping factor per frame for scroll choreography */
  stageDamping: 0.06,
  /** base idle rotation speed (rad/s multipliers) */
  idleRotationX: 0.18,
  idleRotationY: 0.24,
  ringSpinA: 0.12,
  ringSpinB: -0.09,
} as const;

export const PERFORMANCE = {
  dprDesktop: [1, 1.75] as [number, number],
  dprMobile: [1, 1.25] as [number, number],
  /** torus knot tubular/radial segments */
  knotSegmentsDesktop: { tubular: 220, radial: 32 } as const,
  knotSegmentsMobile: { tubular: 96, radial: 16 } as const,
  nodeCountDesktop: 45,
  nodeCountMobile: 18,
} as const;

export const SECTION_IDS = {
  hero: "hero",
  manifesto: "manifesto",
  work: "work",
  services: "services",
  about: "about",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
