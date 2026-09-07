import { TextReveal } from "../ui/TextReveal";
import { SECTION_IDS } from "../../lib/constants";

const DISCIPLINES = ["Design", "Development", "3D WebGL", "Motion"] as const;

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-screen flex-col justify-between px-5 pb-12 pt-36 md:px-14"
    >
      <div className="flex w-full items-start justify-between">
        <div className="space-y-1">
          <div className="font-mono text-[11px] font-medium uppercase tracking-widest3 text-noir-accent">
            Digital Creative Studio
          </div>
          <div className="font-mono text-xs text-noir-muted">/ 01 · IDENTITY</div>
        </div>
        <div className="hidden text-right font-mono text-[11px] tracking-widest text-noir-muted sm:block">
          LOC. [48.8566° N, 2.3522° E]
          <br />
          <span className="text-noir-light">SYS. 3D_CORE_ACTIVE</span>
        </div>
      </div>

      <div className="pointer-events-auto my-auto max-w-none py-12">
        <TextReveal
          as="h1"
          immediate
          delay={0.15}
          className="font-display font-extrabold leading-[0.92] tracking-tightest text-noir-light text-[clamp(24px,6.7vw,96px)]"
          lines={[
            { text: "WE CREATE" },
            {
              text: "DIGITAL EXPERIENCES",
              className:
                "text-transparent bg-clip-text bg-gradient-to-r from-noir-light via-neutral-300 to-neutral-500",
            },
            { text: "THAT MOVE." },
          ]}
        />
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-noir-border/60 pt-6 font-mono text-xs uppercase tracking-widest2 text-noir-muted">
          {DISCIPLINES.map((d, i) => (
            <span key={d} className="flex items-center gap-4">
              {i > 0 && <span className="text-noir-border" aria-hidden="true">•</span>}
              <span>{d}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex w-full items-end justify-between border-t border-noir-border/30 pt-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-noir-accent" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-noir-muted">
            One object. One experience.
          </span>
        </div>
        <a
          className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-noir-muted transition-colors hover:text-noir-light"
          href={`#${SECTION_IDS.manifesto}`}
        >
          <span>Scroll</span>
          <span className="font-semibold text-noir-accent">01 · 06</span>
          <svg
            className="h-4 w-4 transform transition-transform group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
          </svg>
        </a>
      </div>
    </section>
  );
}
