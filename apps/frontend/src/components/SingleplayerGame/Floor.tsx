export default function Floor() {
  return (
    <mesh
      receiveShadow
      rotation={[-1.5707963267948963, 0, 0]}
      position={[0, 0.03, 0]}
    >
      <planeGeometry args={[150, 150, 150]} />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  );
}
