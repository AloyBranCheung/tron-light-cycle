import { useFrame } from '@react-three/fiber';
import { RefObject, useEffect, useRef } from 'react';
import { Mesh, PerspectiveCamera } from 'three';

interface LightCycleProps {
  perspectiveCameraRef: RefObject<PerspectiveCamera | null>;
}
export default function LightCycle({ perspectiveCameraRef }: LightCycleProps) {
  const lightCycleRef = useRef<Mesh>(null);
  const direction = useRef<'x' | 'z'>('x');

  useFrame(() => {
    // TODO: run loop only if game start
    if (lightCycleRef.current && perspectiveCameraRef.current) {
      // lightcycle movement logic
      const speed = 0.1;
      if (direction.current === 'x') {
        lightCycleRef.current.position.x += speed;
      } else {
        lightCycleRef.current.position.z += speed;
      }

      // 3rd person camera offset (behind and above)
      const offset = { x: -2, y: 1.5, z: 0 };

      perspectiveCameraRef.current.position.set(
        lightCycleRef.current.position.x + offset.x,
        lightCycleRef.current.position.y + offset.y,
        lightCycleRef.current.position.z + offset.z
      );

      perspectiveCameraRef.current.lookAt(lightCycleRef.current.position);
    }
  });

  // add keyboard controls for lightcycle
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightCycleRef.current) {
        console.warn('LightCycle ref not set yet');
        return;
      }
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        // Turn left
        if (direction.current === 'x') {
          direction.current = 'z';
          lightCycleRef.current.rotation.y += Math.PI / 2;
        } else {
          direction.current = 'x';
          lightCycleRef.current.rotation.y -= Math.PI / 2;
        }
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        // Turn right
        if (direction.current === 'x') {
          direction.current = 'z';
          lightCycleRef.current.rotation.y -= Math.PI / 2;
        } else {
          direction.current = 'x';
          lightCycleRef.current.rotation.y += Math.PI / 2;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <mesh
      ref={lightCycleRef}
      name="lightCycle"
      castShadow
      position={[0, 0.54, 0]}
    >
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
