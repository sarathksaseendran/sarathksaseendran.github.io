import { Text } from '@react-three/drei';

export const CareerCorridor = () => {
  const doors = [
    { label: "INFOSYS", z: -10 },
    { label: "BPRACT", z: -20 },
    { label: "EZORO", z: -30 },
    { label: "FAST PROG", z: -40 },
    { label: "INFINITE", z: -50 },
  ];

  return (
    <group position={[0, 0, -60]}>
      {/* Floor */}
      <mesh position={[0, -0.1, -25]}>
        <boxGeometry args={[4, 0.2, 60]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      
      {doors.map((door, i) => (
        <group key={i} position={[-2, 0, door.z]}>
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[0.2, 3, 2]} />
            <meshStandardMaterial color="#06b6d4" transparent opacity={0.3} />
          </mesh>
          <Text position={[0.2, 3.2, 0]} rotation={[0, Math.PI/2, 0]} fontSize={0.3} color="#fff">
            {door.label}
          </Text>
        </group>
      ))}
    </group>
  );
};
