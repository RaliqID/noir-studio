/** Ambient film-grain + vignette overlays. Purely atmospheric, non-interactive. */
export function Grain() {
  return (
    <>
      <div className="film-grain pointer-events-none fixed inset-0 z-30 opacity-70" aria-hidden="true" />
      <div className="vignette pointer-events-none fixed inset-0 z-30" aria-hidden="true" />
    </>
  );
}
