import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Game() {
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
