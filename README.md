# NOIR — Digital Creative Studio

Dark editorial studio landing with a real-time WebGL 3D sculpture that responds to cursor and scroll — built as a production-grade React application, not a static mockup.

## Stack

- **React 18 + TypeScript + Vite** — typed, modular component architecture
- **React Three Fiber + Three.js** — persistent 3D stage (separate experience layer)
- **Blender → glTF (Draco)** — sculpture authored as a real 3D asset (126 KB), not CSS fakery
- **GSAP + ScrollTrigger** — line-mask text reveals, scroll choreography
- **Lenis** — inertial smooth scrolling
- **Tailwind CSS 3** — interface styling only (DOM for information, WebGL for experience)

## Highlights

- **One object, one experience** — a torus-knot sculpture with wireframe exoskeleton and gyroscopic rings drifts through six editorial sections (exact choreography formulas, frame-rate-independent damping)
- **Performance-budgeted 3D** — Draco-compressed GLB, self-hosted decoder, lazy-loaded stage, DPR limits, mobile geometry reduction
- **Progressive resilience** — WebGL check + error boundary + static backdrop fallback; reduced-motion users get a calm static experience
- **A11y-first DOM layer** — semantic HTML, skip link, focus states, keyboard navigation; content never depends on WebGL
- **Custom cursor, magnetic CTA, scroll progress rail** — desktop-pointer only, all transform/opacity

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5199
```

```bash
npm run build    # typecheck + production bundle
npm run preview  # serve the production build
```

## Project Structure

```
src/
├── three/          # 3D layer: StageCanvas, Sculpture, lighting, points
├── components/
│   ├── ui/         # Reveal, TextReveal, Magnetic, cursor, rail, grain
│   ├── layout/     # Navbar, Footer
│   └── sections/   # Hero, Manifesto, Work, Services, About, Contact
├── hooks/          # scroll progress, pointer, media queries
├── lib/            # choreography formulas, smooth scroll, constants, gsap
├── data/           # typed content
└── styles/         # Tailwind + design tokens
```

The 3D sculpture source lives in `assets/noir-sculpture.blend`; the compressed runtime asset is `public/models/noir-sculpture.glb`.

## License

All rights reserved.

**Author:** Raliq Hidayat BM3
