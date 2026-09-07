import { NAV_LINKS } from "../../data/content";
import { SECTION_IDS } from "../../lib/constants";

function Brand() {
  return (
    <a className="group flex flex-col" href={`#${SECTION_IDS.hero}`}>
      <span className="flex items-center gap-2.5">
        <span className="font-display text-xl font-extrabold tracking-tighter text-noir-light transition-colors duration-300 group-hover:text-noir-accent md:text-2xl">
          NOIR
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-noir-accent/80" aria-hidden="true" />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-widest text-noir-muted">
        Digital Creative Studio
      </span>
    </a>
  );
}

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-noir-border/40 bg-[#08080a]/40 px-5 py-7 backdrop-blur-md md:px-14">
      <Brand />

      <div className="hidden items-center gap-2.5 rounded-full border border-noir-border/50 bg-[#0d0d12]/60 px-3.5 py-1.5 backdrop-blur-sm lg:flex">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-noir-accent opacity-60" aria-hidden="true" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-noir-accent" aria-hidden="true" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-noir-muted">
          Available for select projects
        </span>
      </div>

      <nav className="flex items-center gap-8 md:gap-11" aria-label="Primary">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden font-mono text-xs uppercase tracking-widest2 text-noir-muted transition-colors hover:text-noir-light md:block"
          >
            {l.label}
          </a>
        ))}
        <a
          href={`#${SECTION_IDS.contact}`}
          className="rounded border border-noir-border px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest2 text-noir-light transition-all hover:border-noir-accent/60 hover:text-noir-accent"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
