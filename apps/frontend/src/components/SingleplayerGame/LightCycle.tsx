import { useFrame } from '@react-three/fiber';
import { RefObject, useEffect, useRef } from 'react';
import { Mesh, PerspectiveCamera } from 'three';
import { gsap } from 'gsap';

interface LightCycleProps {
  perspectiveCameraRef: RefObject<PerspectiveCamera | null>;
}
export default function LightCycle({ perspectiveCameraRef }: LightCycleProps) {
  const lightCycleRef = useRef<Mesh>(null);
  const direction = useRef<{ x: number; z: number }>({ x: 1, z: 0 });

  useFrame(() => {
    // TODO: run loop only if game start
    if (lightCycleRef.current && perspectiveCameraRef.current) {
      // lightcycle movement logic
      const speed = 0.1;
      lightCycleRef.current.position.x += direction.current.x * speed;
      lightCycleRef.current.position.z += direction.current.z * speed;

      // 3rd person camera offset (behind and above)
      const offset = { x: -2, y: 1.5, z: 0 };
      const rotatedOffset = {
        x: offset.x * direction.current.x - offset.z * direction.current.z,
        z: offset.x * direction.current.z + offset.z * direction.current.x,
      };

      perspectiveCameraRef.current.position.set(
        lightCycleRef.current.position.x + rotatedOffset.x,
        lightCycleRef.current.position.y + offset.y,
        lightCycleRef.current.position.z + rotatedOffset.z
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
        // Turn left (90° counterclockwise)
        const newX = direction.current.z;
        const newZ = -direction.current.x;
        direction.current = { x: newX, z: newZ };
        // rotate the object
        gsap.to(lightCycleRef.current.rotation, {
          y: lightCycleRef.current.rotation.y + Math.PI / 2,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        // Turn right (90° clockwise)
        const newX = -direction.current.z;
        const newZ = direction.current.x;
        direction.current = { x: newX, z: newZ };
        // rotate the object
        gsap.to(lightCycleRef.current.rotation, {
          y: lightCycleRef.current.rotation.y - Math.PI / 2,
          duration: 0.3,
          ease: 'power2.out'
        });
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
