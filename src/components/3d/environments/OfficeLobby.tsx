export const OfficeLobby = () => {
  return (
    <group position={[0, 0, -30]}>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[10, 10, 0.2, 32]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[-5, 2, 0]}>
        <boxGeometry args={[2, 4, 10]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      <pointLight position={[0, 5, 0]} intensity={1} color="#3b82f6" />
    </group>
  );
};
