import { Canvas } from '@react-three/fiber';
import { StatsGl } from '@react-three/drei';
import * as THREE from 'three';
import LightCycle from './LightCycle';
import CameraController from './CameraController';

export default function SingleplayerGame() {
  return (
    <Canvas
      shadows
      orthographic
      camera={{ zoom: 50, position: [0, 10, 10] }}
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
      <CameraController />
      <LightCycle />
      <mesh
        receiveShadow
        rotation={[-1.5707963267948963, 0, 0]}
        position={[0, 0.03, 0]}
      >
        <planeGeometry args={[150, 150, 150]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </Canvas>
  );
}
