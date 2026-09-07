import type { ReactNode } from "react";

/** Section header row: accent index tag + optional right meta, hairline below. */
export function SectionHeader({
  tag,
  right,
  children,
}: {
  tag: string;
  right?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-16 flex items-end justify-between border-b border-noir-border/50 pb-6">
      <div>
        <div className="font-mono text-xs font-medium uppercase tracking-widest3 text-noir-accent">
          {tag}
        </div>
        {children}
      </div>
      {right ? (
        <span className="meta-label hidden sm:inline-block">{right}</span>
      ) : null}
    </div>
  );
}
