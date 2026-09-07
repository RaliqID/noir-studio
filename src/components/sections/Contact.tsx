import { Reveal } from "../ui/Reveal";
import { SOCIALS } from "../../data/content";
import { SECTION_IDS } from "../../lib/constants";

export function Contact() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="relative flex min-h-screen flex-col justify-between border-t border-noir-border/40 px-5 pb-12 pt-28 md:px-14"
    >
      <div className="section-shell flex items-center justify-between border-b border-noir-border/40 pb-4">
        <span className="font-mono text-xs font-medium uppercase tracking-widest3 text-noir-accent">
          06 / INITIATE
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-noir-muted">
          Status: Accepting Q3/Q4 commissions
        </span>
      </div>

      <Reveal className="section-shell my-auto w-full py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[clamp(1.55rem,7.6vw,2.25rem)] font-extrabold leading-[0.95] tracking-tightest text-noir-light sm:text-6xl md:text-7xl lg:text-8xl">
            HAVE A PROJECT
            <br />
            IN MIND?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-noir-light via-neutral-400 to-neutral-600">
              LET'S BUILD
            </span>
            <br />
            SOMETHING IMPOSSIBLE.
          </h2>
          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@noir.studio"
              className="group flex items-center gap-3 rounded bg-noir-light px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest2 text-noir-bg transition-all duration-300 hover:bg-noir-accent"
            >
              <span>Start a project</span>
              <span className="transform transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
            <a
              href="mailto:hello@noir.studio"
              className="font-mono text-sm tracking-wider text-noir-muted transition-colors hover:text-noir-light"
            >
              hello@noir.studio
            </a>
          </div>
        </div>
      </Reveal>

      <div className="section-shell flex flex-col items-center justify-between gap-6 border-t border-noir-border/40 pt-8 md:flex-row">
        <div className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-noir-muted">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-noir-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="font-mono text-xs text-noir-muted">Timezone: CET [GMT+1]</div>
      </div>
    </section>
  );
}
