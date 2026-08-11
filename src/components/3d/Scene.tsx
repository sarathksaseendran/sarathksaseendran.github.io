import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import type { CharacterAnimationState } from '../../store/useJourneyStore';
import { useJourneyStore } from '../../store/useJourneyStore';

import { Character } from './Character';
import { CityExterior } from './environments/CityExterior';
import { OfficeLobby } from './environments/OfficeLobby';
import { CareerCorridor } from './environments/CareerCorridor';
import { SkillsWorkspace } from './environments/SkillsWorkspace';
import { ProjectShowroom } from './environments/ProjectShowroom';
import { ArchitectureRoom } from './environments/ArchitectureRoom';
import { ArcadeRoom } from './environments/ArcadeRoom';
import { ContactTerminal } from './environments/ContactTerminal';
import HTMLContent from './HTMLContent';

const Scene = () => {
  const developerMode = useStore((state) => state.developerMode);

  return (
    <>
      <fog attach="fog" args={['#030712', 10, 60]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color={developerMode ? "#ef4444" : "#06b6d4"} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={developerMode ? "#ef4444" : "#3b82f6"} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={developerMode ? 5 : 1} />
      
      {/* Environments */}
      <CityExterior />
      <OfficeLobby />
      <CareerCorridor />
      <SkillsWorkspace />
      <ProjectShowroom />
      <ArchitectureRoom />
      <ArcadeRoom />
      <ContactTerminal />

      {/* The Journey Controller handles the character movement, state, and camera */}
      <JourneyController />

      {/* HTML Overlay layers that scroll */}
      <HTMLContent />
    </>
  );
};

const JourneyController = () => {
  const scroll = useScroll();
  const characterRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  const setCharacterState = useJourneyStore((state) => state.setCharacterState);
  const setCurrentZone = useJourneyStore((state) => state.setCurrentZone);
  const setActiveSection = useStore((state) => state.setActiveSection);

  // The path the character follows
  const path = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 5),      // Intro
      new THREE.Vector3(0, 0, -30),    // Office
      new THREE.Vector3(0, 0, -60),    // Corridor
      new THREE.Vector3(0, 0, -120),   // Workspace
      new THREE.Vector3(0, 0, -180),   // Showroom
      new THREE.Vector3(0, 0, -240),   // Architecture
      new THREE.Vector3(0, 0, -300),   // Arcade
      new THREE.Vector3(0, 0, -360),   // Contact
    ]);
  }, []);

  useFrame(() => {
    if (!characterRef.current) return;

    // Safely clamp offset for overscrolling
    const offset = Math.max(0, Math.min(scroll.offset, 1));
    
    // Get position on path
    const position = path.getPointAt(offset);
    
    // Determine velocity/movement state
    const currentZ = characterRef.current.position.z;
    const isMoving = Math.abs(currentZ - position.z) > 0.1;

    // Smoothly move character
    characterRef.current.position.lerp(position, 0.1);

    // Look ahead on the path
    if (offset < 0.99) {
      const lookAtPos = path.getPointAt(Math.min(offset + 0.01, 1));
      
      // Calculate rotation smoothly
      const targetRotation = Math.atan2(
        characterRef.current.position.x - lookAtPos.x,
        characterRef.current.position.z - lookAtPos.z
      );
      
      // Simple slerp for rotation
      const currentRot = new THREE.Quaternion().setFromEuler(characterRef.current.rotation);
      const targetQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, targetRotation, 0));
      currentRot.slerp(targetQuat, 0.1);
      characterRef.current.rotation.setFromQuaternion(currentRot);
    }

    // Determine Animation State
    let newState: CharacterAnimationState = isMoving ? 'walking' : 'idle';
    
    // Zone logic
    const totalZones = 6;
    const activeZone = Math.round(offset * (totalZones - 1));
    
    if (!isMoving) {
      // If we are stopped in specific zones, change animation
      if (activeZone === 2) newState = 'typing'; // Skills
      if (activeZone === 3) newState = 'interacting'; // Projects
      if (activeZone === 4) newState = 'sitting'; // Game/Arch
    }

    // Update state only if changed
    if (useJourneyStore.getState().characterState !== newState) {
      setCharacterState(newState);
    }
    
    if (useStore.getState().activeSection !== activeZone) {
      setActiveSection(activeZone);
      setCurrentZone(activeZone);
    }

    // Camera follow logic
    // Camera stays slightly behind and above the character
    const camOffset = new THREE.Vector3(0, 3, 8);
    // Transform offset by character rotation
    camOffset.applyEuler(new THREE.Euler(0, characterRef.current.rotation.y, 0));
    
    const targetCamPos = new THREE.Vector3().copy(characterRef.current.position).add(camOffset);
    camera.position.lerp(targetCamPos, 0.05);
    
    // Look at slightly above character
    const lookTarget = new THREE.Vector3().copy(characterRef.current.position);
    lookTarget.y += 1.5;
    
    // Smooth camera lookat (basic version)
    const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
    currentLookAt.lerp(lookTarget, 0.1);
    camera.lookAt(currentLookAt);
  });

  return (
    <group ref={characterRef}>
      <Character />
    </group>
  );
};

export default Scene;
