import { Reveal } from "../ui/Reveal";
import { SECTION_IDS } from "../../lib/constants";

const NOTES = [
  {
    tag: "Discipline",
    body: "Zero compromise on latency, frame-timings, and typographic hierarchy.",
  },
  {
    tag: "Global collaboration",
    body: "Selected commissions only. 4 concurrent engagements per annum.",
  },
] as const;

export function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="relative flex min-h-screen flex-col justify-center border-t border-noir-border/40 px-5 py-28 md:px-14"
    >
      <div className="section-shell">
        <div className="mb-16 flex items-center justify-between border-b border-noir-border/40 pb-4">
          <span className="font-mono text-xs font-medium uppercase tracking-widest3 text-noir-accent">
            05 / STUDIO ORIGIN
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-noir-muted">
            Paris · Tokyo · Global
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-[clamp(1.4rem,6.5vw,1.875rem)] font-extrabold leading-[1.05] tracking-tightest text-noir-light sm:text-5xl md:text-6xl">
              WE BUILD AT THE INTERSECTION OF DESIGN, TECHNOLOGY AND MOTION.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-noir-muted md:text-lg">
              NOIR is an independent digital studio focused on building distinctive
              digital experiences for people, products, and cultural brands. We
              operate as a compact cell of senior artists, creative directors,
              and computational engineers.
            </p>
          </Reveal>

          <div className="space-y-8 pt-2 lg:col-span-4">
            {NOTES.map((n, i) => (
              <Reveal key={n.tag} delay={0.1 * i}>
                <div className="space-y-2 rounded border border-noir-border/50 bg-[#0d0d12]/40 p-6 backdrop-blur-sm">
                  <span className="font-mono text-xs uppercase tracking-widest text-noir-accent">{n.tag}</span>
                  <p className="font-mono text-xs leading-relaxed text-noir-muted">{n.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
