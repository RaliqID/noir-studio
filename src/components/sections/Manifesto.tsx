import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { MANIFESTO_PRINCIPLES } from "../../data/content";
import { SECTION_IDS } from "../../lib/constants";

export function Manifesto() {
  return (
    <section
      id={SECTION_IDS.manifesto}
      className="relative flex min-h-screen flex-col justify-center border-t border-noir-border/40 px-5 py-28 md:px-14"
    >
      <div className="section-shell">
        <SectionHeader
          tag="02 / MANIFESTO"
          right={
            <span className="flex gap-6">
              <span>Design</span>
              <span>Technology</span>
              <span>Motion</span>
            </span>
          }
        />

        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest2 text-noir-muted">Axiom 01</p>
          <blockquote className="mt-6 font-display font-extrabold leading-[0.96] tracking-tightest text-noir-light text-[clamp(22px,6.3vw,84px)]">
            WE DON'T DESIGN
            <br />
            <span className="text-neutral-500 transition-colors duration-500 hover:text-noir-light">
              FOR SCREENS.
            </span>
            <br />
            WE DESIGN
            <br />
            FOR EXPERIENCES.
          </blockquote>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-noir-border/40 pt-10 md:grid-cols-3">
          {MANIFESTO_PRINCIPLES.map((p, i) => (
            <Reveal key={p.tag} delay={0.1 * i} className="space-y-3">
              <span className="font-mono text-xs tracking-widest text-noir-accent">{p.tag}</span>
              <p className="text-sm leading-relaxed text-noir-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
