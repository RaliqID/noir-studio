/**
 * Static backdrop used when WebGL is unavailable.
 * Keeps the composition's spatial mood without the 3D layer.
 */
export function StaticBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-noir-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 34% at 62% 42%, rgba(52,211,153,0.07) 0%, transparent 60%)," +
            "radial-gradient(ellipse 30% 26% at 58% 46%, rgba(234,235,238,0.05) 0%, transparent 70%)," +
            "radial-gradient(ellipse 60% 50% at 50% 50%, #0f0f13 0%, #08080a 100%)",
        }}
      />
    </div>
  );
}
