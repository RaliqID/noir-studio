import { useEffect, useRef } from "react";

/**
 * Frame-loop friendly pointer position, normalized to [-1, 1].
 * Writes into a ref (no React re-render per move); also mirrors to a
 * callback for consumers that need React state (e.g. disabled 3D layer).
 */
export function usePointerNormalized() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}
