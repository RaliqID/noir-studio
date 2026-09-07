export interface Project {
  id: string;
  index: string;
  tags: string;
  title: string;
  subtitle: string;
  year: string;
  recognition: string;
  /** Live case URL (opens in a new tab). Absent → falls back to contact. */
  href?: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: "nexus",
    index: "PROJ / 01",
    tags: "AI / WEBGL / DATA",
    title: "NEXUS",
    subtitle: "On-chain intelligence",
    year: "2026",
    recognition: "FWA / Awwwards SOTD",
  },
  {
    id: "striv",
    index: "PROJ / 02",
    tags: "AI / PRODUCT / UX",
    title: "STRIV",
    subtitle: "Fitness intelligence platform",
    year: "2026",
    recognition: "Red Dot Best of the Best",
    href: "http://localhost:3000",
  },
  {
    id: "archive",
    index: "PROJ / 03",
    tags: "BRAND / INTERACTION",
    title: "NOIR ARCHIVE",
    subtitle: "Digital identity & spatial installation",
    year: "2026",
    recognition: "CSS Design Awards",
  },
];

export const SERVICES: Service[] = [
  {
    id: "products",
    index: "01",
    title: "Digital Products",
    description:
      "Complex interfaces engineered with intuitive ergonomics and human psychology.",
  },
  {
    id: "web",
    index: "02",
    title: "Interactive Web",
    description: "Fluid, cinematic web journeys powered by bespoke micro-interactions.",
  },
  {
    id: "webgl",
    index: "03",
    title: "3D / WebGL",
    description: "Immersive digital environments & procedural shader sculptures.",
  },
  {
    id: "dev",
    index: "04",
    title: "Creative Development",
    description: "Pixel-perfect frontend architecture, custom shaders, and 60fps physics.",
  },
  {
    id: "identity",
    index: "05",
    title: "Visual Identity",
    description: "Dynamic design systems tailored for next-generation technology pioneers.",
  },
  {
    id: "motion",
    index: "06",
    title: "Motion & Experience",
    description: "Calculated kinetic rhythms that guide attention with deliberate intent.",
  },
];

export const MANIFESTO_PRINCIPLES = [
  {
    tag: "[ 01 ] Architectural Precision",
    body: "We reject arbitrary decoration and fleeting templates. Every pixel, transition, and vertex is disciplined by functional purpose and spatial rhythm.",
  },
  {
    tag: "[ 02 ] Reactive Geometry",
    body: "Through bespoke WebGL shader pipelines and procedural physics, our digital environments react organically to user intent without friction.",
  },
  {
    tag: "[ 03 ] Cinematic Intent",
    body: "We orchestrate light, composition, and typography as a single cohesive narrative medium. An interface that lingers long after departure.",
  },
] as const;

export const NAV_LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
] as const;

export const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://behance.net", label: "Behance" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://x.com", label: "X / Twitter" },
] as const;
