export const ProjectShowroom = () => {
  return (
    <group position={[0, 0, -180]}>
      {/* 4 Pedestals for 4 projects */}
      <mesh position={[-4, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[-1.5, 0.5, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[1.5, 0.5, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[4, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
    </group>
  );
};
