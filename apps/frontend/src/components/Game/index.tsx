import { Canvas } from '@react-three/fiber';
import { OrbitControls, StatsGl } from '@react-three/drei';

export default function Game() {
  return (
    <Canvas>
      <StatsGl className="absolute top-1 left-1" />
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[0, 2.83, 3.17]} />
      <OrbitControls />

      <mesh position={[0, 0.85, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh
        receiveShadow
        rotation={[-1.5707963267948963, 0, 0]}
        position={[0, 0.03, 0]}
      >
        <planeGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}
