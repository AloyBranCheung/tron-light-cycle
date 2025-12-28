import { Canvas } from '@react-three/fiber';
import { OrbitControls, StatsGl, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function SingleplayerGame() {
  return (
    <Canvas
      shadows
      gl={{
        toneMapping: THREE.CineonToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <StatsGl className="absolute top-1 left-1" />
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow
        position={[-2.46, 5.51, 7.11]}
        intensity={4.2}
      />
      <OrbitControls />

      <mesh castShadow position={[0, 0.85, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh
        receiveShadow
        rotation={[-1.5707963267948963, 0, 0]}
        position={[0, 0.03, 0]}
      >
        <planeGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </Canvas>
  );
}
