

export const CityExterior = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Basic building block */}
      <mesh position={[0, 5, -10]}>
        <boxGeometry args={[40, 20, 2]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      {/* Neon sign */}
      <mesh position={[0, 8, -8.9]}>
        <boxGeometry args={[10, 2, 0.2]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};
