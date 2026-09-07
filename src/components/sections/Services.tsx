import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { SERVICES } from "../../data/content";
import { SECTION_IDS } from "../../lib/constants";

export function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      className="relative min-h-screen border-t border-noir-border/40 px-5 py-28 md:px-14"
    >
      <div className="section-shell">
        <SectionHeader tag="04 / CAPABILITIES" right="Full-spectrum craft">
          <h2 className="mt-2 font-display text-[clamp(1.7rem,8.8vw,2.25rem)] font-extrabold tracking-tightest text-noir-light sm:text-5xl md:text-6xl">
            WHAT WE DO
          </h2>
        </SectionHeader>

        <div className="divide-y divide-noir-border/40">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i}>
              <div className="group flex flex-col justify-between gap-4 py-8 transition-all duration-300 hover:pl-3 md:flex-row md:items-center md:py-10">
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-sm tabular-nums text-noir-accent">{s.index}</span>
                  <h3 className="font-display text-2xl font-bold text-noir-light transition-colors group-hover:text-white md:text-3xl">
                    {s.title.toUpperCase()}
                  </h3>
                </div>
                <p className="max-w-xs font-mono text-xs uppercase tracking-wider text-noir-muted md:text-right">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
