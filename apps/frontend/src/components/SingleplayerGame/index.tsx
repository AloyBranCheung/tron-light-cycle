import { Canvas } from '@react-three/fiber';
import { StatsGl, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import LightCycle from './LightCycle';
import Floor from './Floor';
import { useRef } from 'react';

export default function SingleplayerGame() {
  const perspectiveCameraRef = useRef(null);

  return (
    <Canvas
      shadows
      gl={{
        toneMapping: THREE.CineonToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      {/* Scene setup */}
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        fov={75}
        position={[0, 1.5, 2.2]}
        rotation={[-0.12, 0, 0]}
        zoom={0.25}
      />
      <StatsGl className="absolute top-1 left-1" />
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow
        position={[-2.46, 6, 7.11]}
        intensity={4.2}
      />
      <Floor />

      {/* LightCycle and Game logic */}
      <LightCycle perspectiveCameraRef={perspectiveCameraRef} />

      {/* // TODO: remove this - just a marker for dev to follow movement */}
      <mesh castShadow position={[5, 0.54, 5]}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}
