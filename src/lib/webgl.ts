let cached: boolean | null = null;

/** Detect WebGL availability once; drives the static fallback layer. */
export function isWebGLAvailable(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ??
      canvas.getContext("webgl") ??
      canvas.getContext("experimental-webgl");
    cached = Boolean(
      gl &&
        (gl as WebGLRenderingContext).getParameter &&
        (gl as WebGLRenderingContext).VERSION
    );
  } catch {
    cached = false;
  }
  return cached;
}
