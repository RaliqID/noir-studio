import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MOTION } from "../lib/constants";
import { computeStage, damp, PRESENCE } from "../lib/choreography";
import type { PointerRef, ScrollRef } from "../types/refs";

const MODEL_URL = "/models/noir-sculpture.glb";

/**
 * Hero sculpture: real GLB asset authored in Blender
 * (torus-knot body + wireframe exoskeleton + gyroscopic rings).
 * DOM layer owns content; this layer owns the experience.
 */
export function Sculpture({
  scroll,
  pointer,
  reducedMotion,
}: {
  scroll: ScrollRef;
  pointer: PointerRef;
  reducedMotion: boolean;
}) {
  const { scene } = useGLTF(MODEL_URL);

  const parts = useMemo(() => {
    const get = (n: string) => scene.getObjectByName(n);
    // Solid node spheres are replaced by the cheaper Points cloud layer.
    const nodes = get("NOIR_Nodes");
    if (nodes) nodes.visible = false;
    return {
      sculpture: get("NOIR_Sculpture"),
      exo: get("NOIR_Exoskeleton"),
      ringA: get("NOIR_Ring_A"),
      ringB: get("NOIR_Ring_B"),
    };
  }, [scene]);

  const root = useRef<THREE.Group>(null!);
  const tmp = useRef(new THREE.Vector3());

  useFrame((state, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    const t = state.clock.elapsedTime;

    const { position, scale } = computeStage(scroll.current);
    const px = reducedMotion ? 0 : pointer.current.x;
    const py = reducedMotion ? 0 : pointer.current.y;

    tmp.current.set(position[0] + px * 0.6, position[1] - py * 0.5, position[2]);
    const k = damp(reducedMotion ? 40 : 4, dt);
    root.current.position.lerp(tmp.current, k);
    const s = root.current.scale.x + (scale * PRESENCE - root.current.scale.x) * k;
    root.current.scale.setScalar(s);

    if (!reducedMotion) {
      const rx = t * MOTION.idleRotationX + py * 0.4;
      const ry = t * MOTION.idleRotationY + px * 0.5;
      if (parts.sculpture) {
        parts.sculpture.rotation.x = rx;
        parts.sculpture.rotation.y = ry;
      }
      if (parts.exo) {
        parts.exo.rotation.x = rx;
        parts.exo.rotation.y = ry;
      }
      if (parts.ringA) parts.ringA.rotation.z = t * MOTION.ringSpinA;
      if (parts.ringB) parts.ringB.rotation.x = t * MOTION.ringSpinB;
    }
  });

  return (
    <group ref={root}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
