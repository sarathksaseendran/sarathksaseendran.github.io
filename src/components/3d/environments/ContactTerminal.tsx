import { Text } from '@react-three/drei';

export const ContactTerminal = () => {
  return (
    <group position={[0, 0, -360]}>
      {/* Huge terminal screen */}
      <mesh position={[0, 5, -5]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[16, 9, 0.5]} />
        <meshStandardMaterial color="#000" emissive="#06b6d4" emissiveIntensity={0.5} />
      </mesh>
      
      <Text position={[0, 5, -4.7]} fontSize={1} color="#fff" maxWidth={14} textAlign="center">
        LET'S BUILD SOMETHING.
      </Text>
    </group>
  );
};
