export const SkillsWorkspace = () => {
  return (
    <group position={[0, 0, -120]}>
      {/* Large curved desk */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[4, 4, 0.1, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      
      {/* Monitors */}
      <mesh position={[-1, 1.5, -2]} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[1.6, 0.9, 0.05]} />
        <meshStandardMaterial color="#000" emissive="#06b6d4" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[1, 1.5, -2]} rotation={[0, -0.2, 0]}>
        <boxGeometry args={[1.6, 0.9, 0.05]} />
        <meshStandardMaterial color="#000" emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};
