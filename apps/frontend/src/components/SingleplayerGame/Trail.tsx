import { RefObject } from 'react';
import { Mesh } from 'three';

interface TrailProps {
  ref: RefObject<Mesh | null>;
}
export default function Trail({ ref }: TrailProps) {
  return (
    <mesh
      ref={ref}
      name="lightCycleTrail"
      castShadow
      position={[-1.8, 0.5, 0]}
      scale={[2.6, 1, 0.09]}
    >
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
