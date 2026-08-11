export const ArchitectureRoom = () => {
  return (
    <group position={[0, 0, -240]}>
      {/* Huge server racks */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[(i % 2 === 0 ? -3 : 3), 2, -i * 2]}>
          <boxGeometry args={[1, 4, 1]} />
          <meshStandardMaterial color="#0f172a" emissive="#06b6d4" emissiveIntensity={0.1} />
        </mesh>
      ))}
    </group>
  );
};
