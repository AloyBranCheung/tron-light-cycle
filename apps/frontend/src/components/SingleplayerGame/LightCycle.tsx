import { useFrame } from '@react-three/fiber';
export default function LightCycle() {
  useFrame((state) => {
    // TODO: run loop only if game start

    for (const child of state.scene.children) {
      if (child.name === 'lightCycle') {
        // child.position.x += 0.1;
      }
    }
  });
  return (
    <mesh name="lightCycle" castShadow position={[0, 0.85, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
