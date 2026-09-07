import { COLORS } from "../lib/constants";

/**
 * Cinematic studio lighting rig, matched to the Stitch reference:
 * cold key, jade rim (the single accent), bottom fill.
 */
export function StudioLighting({ intensity = 1 }: { intensity?: number }) {
  return (
    <>
      <ambientLight color={COLORS.surface} intensity={1.4 * intensity} />
      <directionalLight
        color={COLORS.keyLight}
        intensity={4.2 * intensity}
        position={[5, 8, 7]}
      />
      <directionalLight
        color={COLORS.rimLight}
        intensity={0.9 * intensity}
        position={[-6, -4, -5]}
      />
      <pointLight
        color={COLORS.fillLight}
        intensity={1.6 * intensity}
        distance={20}
        position={[0, -5, 4]}
      />
    </>
  );
}
