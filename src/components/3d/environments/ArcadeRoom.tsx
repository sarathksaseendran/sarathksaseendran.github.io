export const ArcadeRoom = () => {
  return (
    <group position={[0, 0, -300]}>
      {/* Arcade machine body */}
      <mesh position={[0, 2, -2]}>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* The screen where BreakTheStack will mount */}
      <mesh position={[0, 2.5, -0.9]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.5, 1.5]} />
        <meshBasicMaterial color="#06b6d4" wireframe />
      </mesh>
    </group>
  );
};
