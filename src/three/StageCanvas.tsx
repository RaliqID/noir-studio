import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Sculpture } from "./Sculpture";
import { StudioLighting } from "./StudioLighting";
import { ConstellationNodes } from "./ConstellationNodes";
import { ThreeErrorBoundary } from "./ThreeErrorBoundary";
import { CAMERA, PERFORMANCE } from "../lib/constants";
import type { PointerRef, ScrollRef } from "../types/refs";

interface StageCanvasProps {
  scroll: ScrollRef;
  pointer: PointerRef;
  reducedMotion: boolean;
  mobile: boolean;
}

/**
 * Persistent 3D stage. Fixed behind the DOM stream, pointer-transparent.
 * Mounted only when WebGL is available; the DOM layer never depends on it.
 */
export function StageCanvas({ scroll, pointer, reducedMotion, mobile }: StageCanvasProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <ThreeErrorBoundary>
        <Canvas
          dpr={mobile ? PERFORMANCE.dprMobile : PERFORMANCE.dprDesktop}
          camera={{
            fov: CAMERA.fov,
            near: CAMERA.near,
            far: CAMERA.far,
            position: [0, 0, CAMERA.z],
          }}
          gl={{
            alpha: true,
            antialias: !mobile,
            powerPreference: "high-performance",
          }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.2;
          }}
        >
          <Suspense fallback={null}>
            <StudioLighting intensity={mobile ? 0.85 : 1} />
            <Sculpture scroll={scroll} pointer={pointer} reducedMotion={reducedMotion} />
            <ConstellationNodes
              count={mobile ? PERFORMANCE.nodeCountMobile : PERFORMANCE.nodeCountDesktop}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
