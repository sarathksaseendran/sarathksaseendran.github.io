import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useJourneyStore } from '../../store/useJourneyStore';

export const Character = (props: any) => {
  const group = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Mesh>(null);
  const rightLeg = useRef<THREE.Mesh>(null);
  const leftArm = useRef<THREE.Mesh>(null);
  const rightArm = useRef<THREE.Mesh>(null);
  const body = useRef<THREE.Mesh>(null);

  const characterState = useJourneyStore((state) => state.characterState);

  useFrame((state) => {
    if (!group.current || !leftLeg.current || !rightLeg.current || !leftArm.current || !rightArm.current || !body.current) return;

    const t = state.clock.getElapsedTime();

    if (characterState === 'walking') {
      // Walking animation
      const walkSpeed = 5;
      const swingMagnitude = 0.5;

      leftLeg.current.rotation.x = Math.sin(t * walkSpeed) * swingMagnitude;
      rightLeg.current.rotation.x = Math.sin(t * walkSpeed + Math.PI) * swingMagnitude;
      
      leftArm.current.rotation.x = Math.sin(t * walkSpeed + Math.PI) * swingMagnitude;
      rightArm.current.rotation.x = Math.sin(t * walkSpeed) * swingMagnitude;

      // Bobbing motion
      group.current.position.y = Math.abs(Math.sin(t * walkSpeed)) * 0.1;
      
      // Reset rotation that might have been changed by sitting/typing
      body.current.rotation.x = 0;
      leftArm.current.rotation.z = 0;
      rightArm.current.rotation.z = 0;
      leftLeg.current.rotation.z = 0;
      rightLeg.current.rotation.z = 0;

    } else if (characterState === 'typing' || characterState === 'sitting') {
      // Sitting/Typing pose
      leftLeg.current.rotation.x = -Math.PI / 2;
      rightLeg.current.rotation.x = -Math.PI / 2;
      
      body.current.rotation.x = 0.1; // Lean forward slightly
      
      if (characterState === 'typing') {
        // Typing animation for arms
        leftArm.current.rotation.x = -Math.PI / 3 + Math.sin(t * 10) * 0.1;
        rightArm.current.rotation.x = -Math.PI / 3 + Math.cos(t * 12) * 0.1;
        leftArm.current.rotation.z = 0.2;
        rightArm.current.rotation.z = -0.2;
      } else {
        // Just sitting
        leftArm.current.rotation.x = -Math.PI / 4;
        rightArm.current.rotation.x = -Math.PI / 4;
        leftArm.current.rotation.z = 0;
        rightArm.current.rotation.z = 0;
      }

      // Drop down to sit height
      group.current.position.y = -0.4;
      
    } else {
      // Idle animation
      const idleSpeed = 2;
      const breatheMagnitude = 0.05;

      // Reset rotations smoothly
      leftLeg.current.rotation.x = THREE.MathUtils.damp(leftLeg.current.rotation.x, 0, 4, 0.016);
      rightLeg.current.rotation.x = THREE.MathUtils.damp(rightLeg.current.rotation.x, 0, 4, 0.016);
      leftArm.current.rotation.x = THREE.MathUtils.damp(leftArm.current.rotation.x, 0, 4, 0.016);
      rightArm.current.rotation.x = THREE.MathUtils.damp(rightArm.current.rotation.x, 0, 4, 0.016);
      
      leftArm.current.rotation.z = 0;
      rightArm.current.rotation.z = 0;
      body.current.rotation.x = 0;

      // Breathing bob
      group.current.position.y = THREE.MathUtils.damp(
        group.current.position.y,
        Math.sin(t * idleSpeed) * breatheMagnitude,
        4, 
        0.016
      );
    }
  });

  // Load generated suit texture
  const suitTex = useLoader(THREE.TextureLoader, '/suit_texture.png');
  suitTex.colorSpace = THREE.SRGBColorSpace;

  // Stylized proxy materials
  const suitMaterial = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.8 });
  const suitFrontMaterial = new THREE.MeshStandardMaterial({ map: suitTex, roughness: 0.8 });
  const skinMaterial = new THREE.MeshStandardMaterial({ color: '#fcd34d', roughness: 0.5 });
  const shoeMaterial = new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.9 });
  const glassMaterial = new THREE.MeshPhysicalMaterial({ 
    color: '#000000', 
    metalness: 0.9, 
    roughness: 0.1,
    transmission: 0.5,
    thickness: 0.5
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Body / Torso */}
      <mesh ref={body} position={[0, 0.85, 0]}>
        <boxGeometry args={[0.5, 0.7, 0.3]} />
        {/* Map texture only to the front face (index 4 in BoxGeometry) */}
        <meshStandardMaterial attach="material-0" color="#1e293b" />
        <meshStandardMaterial attach="material-1" color="#1e293b" />
        <meshStandardMaterial attach="material-2" color="#1e293b" />
        <meshStandardMaterial attach="material-3" color="#1e293b" />
        <primitive attach="material-4" object={suitFrontMaterial} />
        <meshStandardMaterial attach="material-5" color="#1e293b" />
      </mesh>
      
      {/* Head & Face */}
      <group position={[0, 1.35, 0]}>
        {/* Head */}
        <mesh material={skinMaterial}>
          <boxGeometry args={[0.3, 0.35, 0.3]} />
        </mesh>
        {/* Hair */}
        <mesh position={[0, 0.18, 0]} material={shoeMaterial}>
          <boxGeometry args={[0.32, 0.05, 0.32]} />
        </mesh>
        {/* Glasses */}
        <mesh position={[0, 0.05, 0.16]} material={glassMaterial}>
          <boxGeometry args={[0.26, 0.08, 0.02]} />
        </mesh>
      </group>
      
      {/* Left Arm (hinged at shoulder) */}
      <group position={[-0.32, 1.15, 0]}>
        <mesh ref={leftArm} position={[0, -0.3, 0]} material={suitMaterial}>
          <cylinderGeometry args={[0.06, 0.05, 0.6]} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.65, 0]} material={skinMaterial}>
          <sphereGeometry args={[0.05]} />
        </mesh>
      </group>
      
      {/* Right Arm (hinged at shoulder) */}
      <group position={[0.32, 1.15, 0]}>
        <mesh ref={rightArm} position={[0, -0.3, 0]} material={suitMaterial}>
          <cylinderGeometry args={[0.06, 0.05, 0.6]} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.65, 0]} material={skinMaterial}>
          <sphereGeometry args={[0.05]} />
        </mesh>
      </group>

      {/* Left Leg (hinged at hip) */}
      <group position={[-0.14, 0.5, 0]}>
        <mesh ref={leftLeg} position={[0, -0.25, 0]} material={suitMaterial}>
          <cylinderGeometry args={[0.07, 0.06, 0.5]} />
        </mesh>
        {/* Shoe */}
        <mesh position={[0, -0.5, 0.05]} material={shoeMaterial}>
           <boxGeometry args={[0.1, 0.08, 0.15]} />
        </mesh>
      </group>

      {/* Right Leg (hinged at hip) */}
      <group position={[0.14, 0.5, 0]}>
        <mesh ref={rightLeg} position={[0, -0.25, 0]} material={suitMaterial}>
          <cylinderGeometry args={[0.07, 0.06, 0.5]} />
        </mesh>
        {/* Shoe */}
        <mesh position={[0, -0.5, 0.05]} material={shoeMaterial}>
           <boxGeometry args={[0.1, 0.08, 0.15]} />
        </mesh>
      </group>
    </group>
  );
};
