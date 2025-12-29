import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function CameraController() {
  const { camera, scene } = useThree();
  const offset = useRef(new THREE.Vector3(0, 2, 8));

  useFrame(() => {
    const lightCycle = scene.getObjectByName('lightCycle');
    if (lightCycle) {
      const targetPosition = lightCycle.position.clone().add(offset.current);
      camera.position.lerp(targetPosition, 0.1);
      camera.lookAt(lightCycle.position);
    }
  });

  return null;
}