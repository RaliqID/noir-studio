export function Footer() {
  return (
    <footer className="relative z-20 flex flex-col items-center justify-between gap-4 border-t border-noir-border/30 bg-noir-bg px-5 py-8 sm:flex-row md:px-14">
      <div className="flex items-center gap-4">
        <span className="font-display text-sm font-extrabold text-noir-light">NOIR</span>
        <span className="text-noir-border" aria-hidden="true">•</span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-noir-muted">
          Digital Creative Studio 2026
        </span>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest2 text-noir-muted">
        Design × Development × Experience
      </div>
      <div className="font-mono text-[10px] text-neutral-600">All rights reserved © 2026</div>
    </footer>
  );
}
