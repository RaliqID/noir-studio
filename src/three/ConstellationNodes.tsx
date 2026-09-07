import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Constellation nodes, rebuilt as a GPU-friendly Points cloud.
 * (The GLB ships solid nodes; the Stitch reference used a point field.
 *  Points render cheaper and read more precise at small sizes.)
 */
export function ConstellationNodes({
  count = 45,
  reducedMotion = false,
}: {
  count?: number;
  reducedMotion?: boolean;
}) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    let seed = 42;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (rnd() - 0.5) * 8;
      arr[i + 1] = (rnd() - 0.5) * 8;
      arr[i + 2] = (rnd() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (reducedMotion) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#d4d4dc"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}
