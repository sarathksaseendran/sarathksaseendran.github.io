import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import { useState } from 'react';

const NODE_COUNT = 200;

export const MetaphorSystem = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const scroll = useScroll();
  const developerMode = useStore(state => state.developerMode);
  const setDeveloperMode = useStore(state => state.setDeveloperMode);
  const [clickCount, setClickCount] = useState(0);
  
  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    if (scroll.offset < 0.2) { // Only allow click on the Core (Scene 1)
      const newCount = clickCount + 1;
      setClickCount(newCount);
      if (newCount >= 5 && !developerMode) {
        setDeveloperMode(true);
      }
    }
  };
  
  // Precompute shapes
  const shapes = useMemo(() => {
    const s1 = new Float32Array(NODE_COUNT * 3); // Core
    const s2 = new Float32Array(NODE_COUNT * 3); // Workstation
    const s3 = new Float32Array(NODE_COUNT * 3); // Timeline
    const s4 = new Float32Array(NODE_COUNT * 3); // Tech Network
    const s5 = new Float32Array(NODE_COUNT * 3); // Architecture
    const s6 = new Float32Array(NODE_COUNT * 3); // Projects
    const s7 = new Float32Array(NODE_COUNT * 3); // Performance
    const s8 = new Float32Array(NODE_COUNT * 3); // Game
    const s9 = new Float32Array(NODE_COUNT * 3); // Contact/Universe

    for (let i = 0; i < NODE_COUNT; i++) {
      const idx = i * 3;
      
      // 1. Core (Dense Sphere)
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
      s1[idx] = 1.5 * Math.cos(theta) * Math.sin(phi);
      s1[idx+1] = 1.5 * Math.sin(theta) * Math.sin(phi);
      s1[idx+2] = 1.5 * Math.cos(phi);

      // 2. Workstation (3 abstract clusters)
      const cluster = i % 3;
      const rx = (Math.random() - 0.5) * 2;
      const ry = (Math.random() - 0.5) * 2;
      const rz = (Math.random() - 0.5) * 2;
      s2[idx] = (cluster - 1) * 3 + rx;
      s2[idx+1] = ry;
      s2[idx+2] = rz;

      // 3. Timeline (Long cylinder along Z axis)
      s3[idx] = Math.cos(theta) * 1;
      s3[idx+1] = Math.sin(theta) * 1;
      s3[idx+2] = (i / NODE_COUNT) * -40 + 10; // Stretches from z=10 to z=-30

      // 4. Tech Network (Center + Orbits)
      if (i < 20) {
        s4[idx] = Math.cos(theta) * Math.sin(phi);
        s4[idx+1] = Math.sin(theta) * Math.sin(phi);
        s4[idx+2] = Math.cos(phi);
      } else {
        const orbitRadius = 4 + Math.random() * 6;
        s4[idx] = Math.cos(theta) * orbitRadius;
        s4[idx+1] = Math.sin(theta) * orbitRadius + (Math.random()-0.5)*2;
        s4[idx+2] = Math.sin(theta) * orbitRadius * 0.5; // Tilted
      }

      // 5. Architecture (Pipeline along X)
      const stage = Math.floor((i / NODE_COUNT) * 5);
      s5[idx] = (stage - 2) * 4 + (Math.random()-0.5);
      s5[idx+1] = (Math.random()-0.5) * 2;
      s5[idx+2] = (Math.random()-0.5) * 2;

      // 6. Projects (Grid of flat planes)
      const col = (i % 10) - 5;
      const row = Math.floor(i / 10) - 10;
      s6[idx] = col * 0.5;
      s6[idx+1] = row * 0.5;
      s6[idx+2] = Math.sin(col) * 0.1; // Slight wave

      // 7. Performance (Graph)
      s7[idx] = (i / NODE_COUNT) * 10 - 5;
      s7[idx+1] = Math.sin((i / NODE_COUNT) * Math.PI * 4) * 2;
      s7[idx+2] = (Math.random() - 0.5) * 0.5;

      // 8. Game (Glitching scattered nodes)
      s8[idx] = (Math.random() - 0.5) * 10;
      s8[idx+1] = (Math.random() - 0.5) * 10;
      s8[idx+2] = (Math.random() - 0.5) * 10;

      // 9. Universe (Massive galaxy)
      const uRadius = Math.random() * 15;
      s9[idx] = Math.cos(theta) * uRadius;
      s9[idx+1] = (Math.random() - 0.5) * 2;
      s9[idx+2] = Math.sin(theta) * uRadius;
    }
    
    return [s1, s3, s4, s6, s8, s9];
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // To keep track of current positions for smooth lerping
  const currentPositions = useRef(new Float32Array(NODE_COUNT * 3));
  
  useEffect(() => {
    // Initialize with scene 1
    for(let i=0; i<NODE_COUNT*3; i++) {
      currentPositions.current[i] = shapes[0][i];
    }
  }, [shapes]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const offset = scroll.offset;
    // Map offset (0 to 1) to 5 segments (0 to 5 for 6 pages), clamped to prevent negative overscroll crashes
    const progress = Math.max(0, Math.min(offset * 5, 5));
    const currentShapeIdx = Math.min(Math.floor(progress), 4); // 0 to 4
    const nextShapeIdx = currentShapeIdx + 1; // 1 to 5
    const lerpFactor = progress - currentShapeIdx; // 0 to 1

    const shape1 = shapes[currentShapeIdx];
    const shape2 = shapes[nextShapeIdx];

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < NODE_COUNT; i++) {
      const idx = i * 3;
      
      // Target position based on scroll interpolation
      const tx = THREE.MathUtils.lerp(shape1[idx], shape2[idx], lerpFactor);
      const ty = THREE.MathUtils.lerp(shape1[idx+1], shape2[idx+1], lerpFactor);
      const tz = THREE.MathUtils.lerp(shape1[idx+2], shape2[idx+2], lerpFactor);

      // Smoothly animate current position towards target
      currentPositions.current[idx] = THREE.MathUtils.damp(currentPositions.current[idx], tx, 4, delta);
      currentPositions.current[idx+1] = THREE.MathUtils.damp(currentPositions.current[idx+1], ty, 4, delta);
      currentPositions.current[idx+2] = THREE.MathUtils.damp(currentPositions.current[idx+2], tz, 4, delta);

      // Add a tiny bit of continuous organic movement
      const organicX = Math.sin(time + i) * 0.05;
      const organicY = Math.cos(time + i) * 0.05;

      dummy.position.set(
        currentPositions.current[idx] + organicX,
        currentPositions.current[idx+1] + organicY,
        currentPositions.current[idx+2]
      );
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    
    // Global system rotation based on dev mode or just time
    meshRef.current.rotation.y = developerMode ? time * 0.5 : time * 0.05;
  });

  return (
    <instancedMesh 
      ref={meshRef} 
      args={[undefined, undefined, NODE_COUNT]}
      onPointerDown={handlePointerDown}
    >
      <octahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial 
        color={developerMode ? "#ef4444" : "#06b6d4"} 
        emissive={developerMode ? "#ef4444" : "#06b6d4"} 
        emissiveIntensity={1.5}
        wireframe={!developerMode}
      />
    </instancedMesh>
  );
};
