import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { PROJECTS } from "../../data/content";
import { SECTION_IDS } from "../../lib/constants";

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5 -rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    </svg>
  );
}

export function Work() {
  return (
    <section
      id={SECTION_IDS.work}
      className="relative min-h-screen border-t border-noir-border/40 px-5 py-28 md:px-14"
    >
      <div className="section-shell">
        <SectionHeader tag="03 / CASE ARCHIVE" right="2024 · 2026 Index">
          <h2 className="mt-2 font-display text-[clamp(1.7rem,8.8vw,2.25rem)] font-extrabold tracking-tightest text-noir-light sm:text-5xl md:text-6xl">
            SELECTED WORK
          </h2>
        </SectionHeader>

        <div className="divide-y divide-noir-border/40">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <article className="group relative py-12 transition-all duration-300 md:py-16">
                <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-mono text-xs tracking-widest text-noir-accent">{p.index}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-noir-muted">{p.tags}</span>
                    </div>
                    <h3 className="font-display text-3xl font-extrabold tracking-tightest text-noir-light transition-colors duration-300 group-hover:text-noir-accent sm:text-4xl md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="font-mono text-sm uppercase tracking-wider text-noir-muted">{p.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-12 text-right">
                    <div className="hidden text-right md:block">
                      <span className="block font-mono text-xs uppercase text-noir-muted">Year</span>
                      <span className="font-mono text-sm tabular-nums text-noir-light">{p.year}</span>
                    </div>
                    <div className="hidden text-right md:block">
                      <span className="block font-mono text-xs uppercase text-noir-muted">Recognition</span>
                      <span className="font-mono text-sm text-noir-light">{p.recognition}</span>
                    </div>
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${p.title} live site (new tab)`}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-noir-border transition-all duration-300 group-hover:border-noir-accent group-hover:bg-noir-accent group-hover:text-noir-bg"
                      >
                        <ArrowIcon />
                      </a>
                    ) : (
                      <a
                        href={`#${SECTION_IDS.contact}`}
                        aria-label={`Enquire about ${p.title}`}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-noir-border transition-all duration-300 group-hover:border-noir-accent group-hover:bg-noir-accent group-hover:text-noir-bg"
                      >
                        <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
