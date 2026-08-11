import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import { useGameEngine } from './useGameEngine';
import styles from './Game.module.css';
import { GameUI } from './GameUI';
import { LevelManager } from './LevelManager';

// A simple box component for the paddle
const Paddle = () => {
  const { paddleX, paddleWidth } = useGameEngine();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Smoothly interpolate to target X
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        paddleX,
        0.5
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -8, 0]}>
      <boxGeometry args={[paddleWidth, 0.5, 1]} />
      <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
    </mesh>
  );
};

// The glowing ball
const Ball = () => {
  const { ballPos } = useGameEngine();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.set(ballPos[0], ballPos[1], ballPos[2]);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={1} />
    </mesh>
  );
};

// Brick renderer
const Bricks = () => {
  const { bricks } = useGameEngine();

  return (
    <>
      {bricks.filter(b => b.active).map(b => (
        <mesh key={b.id} position={[b.x, b.y, b.z]}>
          <boxGeometry args={[b.width, b.height, b.depth]} />
          <meshStandardMaterial 
            color={b.color} 
            emissive={b.color}
            emissiveIntensity={0.2 + (b.hp / b.maxHp) * 0.3}
            transparent
            opacity={0.9}
            wireframe={b.isBoss && b.hp < b.maxHp / 2}
          />
          <Text 
            position={[0, 0, b.depth / 2 + 0.01]} 
            fontSize={b.isBoss ? 0.8 : 0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {b.label}
          </Text>
        </mesh>
      ))}
    </>
  );
};

const Particles = () => {
  const { particles } = useGameEngine();
  return (
    <>
      {particles.map(p => (
        <Text
          key={p.id}
          position={[p.x, p.y, p.z]}
          fontSize={0.4}
          color={p.color}
          fillOpacity={p.life / p.maxLife}
        >
          {p.text}
        </Text>
      ))}
    </>
  );
}

const Bugs = () => {
  const { bugs } = useGameEngine();
  return (
    <>
      {bugs.map(b => (
        <mesh key={b.id} position={[b.x, b.y, b.z]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} wireframe />
          <Text position={[0, 0, 0.51]} fontSize={0.3} color="#fff">
            {b.label}
          </Text>
        </mesh>
      ))}
    </>
  );
}

// Master physics loop and inputs
const GameEngine = () => {
  const store = useStore();
  const engine = useGameEngine();
  const { setPaddleX, setBallPos, setBallVel, setGameState, addParticle } = engine;
  
  // Start level
  useEffect(() => {
    if (engine.gameState === 'start') {
      LevelManager.loadLevel(store.bts_level, engine.setBricks);
      setBallPos([0, -6, 0]);
      setBallVel([0, 0, 0]);
    }
  }, [engine.gameState, store.bts_level]);

  // Handle pointer/mouse for paddle
  const handlePointerMove = (e: any) => {
    // Convert normalized device coordinates (-1 to +1) to game world units (-10 to +10 roughly)
    const x = (e.clientX / window.innerWidth) * 20 - 10;
    setPaddleX(Math.max(-9, Math.min(9, x)));
  };

  const handlePointerDown = () => {
    if (engine.gameState === 'start' || engine.gameState === 'lostLife') {
      setGameState('playing');
      // Launch ball up and slightly in random horizontal direction
      setBallVel([(Math.random() - 0.5) * 10, 15, 0]);
    }
  };

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [engine.gameState]);

  useFrame((_, delta) => {
    engine.updateParticles(delta);
    engine.updateBugs(delta);
    
    if (engine.gameState !== 'playing') return;
    
    // Physics iteration (delta time based)
    const { ballPos, ballVel, paddleX, paddleWidth, bricks, bugs } = useGameEngine.getState();
    
    let nx = ballPos[0] + ballVel[0] * delta;
    let ny = ballPos[1] + ballVel[1] * delta;
    let vx = ballVel[0];
    let vy = ballVel[1];
    
    // Wall collisions
    const bounds = 10;
    if (nx > bounds) { nx = bounds; vx *= -1; }
    if (nx < -bounds) { nx = -bounds; vx *= -1; }
    if (ny > 12) { ny = 12; vy *= -1; }
    
    // Bottom screen - lost life
    if (ny < -10) {
      setGameState('lostLife');
      store.loseBtsLife();
      store.resetBtsCombo();
      if (store.bts_lives <= 0) {
        setGameState('gameOver');
      } else {
        setBallPos([paddleX, -6, 0]);
        setBallVel([0, 0, 0]);
      }
      return;
    }
    
    // Paddle collision
    const ballRadius = 0.4;
    const pY = -8;
    const pH = 0.5;
    
    if (vy < 0 && ny - ballRadius < pY + pH/2 && ny + ballRadius > pY - pH/2) {
      if (nx > paddleX - paddleWidth/2 && nx < paddleX + paddleWidth/2) {
        ny = pY + pH/2 + ballRadius;
        vy *= -1;
        
        // Add horizontal velocity based on where it hit the paddle
        const hitPoint = (nx - paddleX) / (paddleWidth / 2);
        vx += hitPoint * 8; // Max added horiz velocity
        
        // Cap max horizontal speed
        vx = Math.max(-15, Math.min(15, vx));
      }
    }
    
    // Brick collision (Simple AABB)
    let hitAny = false;
    const newBricks = [...bricks];
    
    for (let i = 0; i < newBricks.length; i++) {
      const b = newBricks[i];
      if (!b.active) continue;
      
      const bLeft = b.x - b.width/2;
      const bRight = b.x + b.width/2;
      const bBottom = b.y - b.height/2;
      const bTop = b.y + b.height/2;
      
      if (nx + ballRadius > bLeft && nx - ballRadius < bRight && 
          ny + ballRadius > bBottom && ny - ballRadius < bTop) {
        
        // Determine which side was hit
        const overlapL = (nx + ballRadius) - bLeft;
        const overlapR = bRight - (nx - ballRadius);
        const overlapT = bTop - (ny - ballRadius);
        const overlapB = (ny + ballRadius) - bBottom;
        
        const min = Math.min(overlapL, overlapR, overlapT, overlapB);
        
        if (min === overlapL || min === overlapR) vx *= -1;
        if (min === overlapT || min === overlapB) vy *= -1;
        
        // Damage brick
        b.hp -= 1;
        hitAny = true;
        
        if (b.hp <= 0) {
          b.active = false;
          store.incrementBtsCombo();
          store.incrementBtsBricks();
          
          let xpAward = 50;
          if (b.type === 'project') {
            xpAward = 200;
            store.incrementBtsProjects();
          } else if (b.type === 'experience') {
            xpAward = 500;
          } else if (b.type === 'boss') {
            xpAward = 5000;
          }
          
          store.addBtsXp(xpAward * (1 + store.bts_combo * 0.1));
          
          addParticle({
            id: Math.random().toString(),
            text: "+" + xpAward + " XP",
            x: b.x, y: b.y, z: b.z,
            life: 1, maxLife: 1,
            color: b.color
          });
        } else {
          // Play hit effect but don't destroy
          addParticle({
            id: Math.random().toString(),
            text: b.hp.toString(),
            x: nx, y: ny, z: b.z,
            life: 0.5, maxLife: 0.5,
            color: "#ffffff"
          });
        }
        
        break; // Only hit one brick per frame
      }
    }
    
    // Bug collision (ball or paddle)
    const newBugs = [...bugs];
    for (let i = 0; i < newBugs.length; i++) {
      const bug = newBugs[i];
      if (!bug.active) continue;
      
      const distToBall = Math.sqrt(Math.pow(nx - bug.x, 2) + Math.pow(ny - bug.y, 2));
      const distToPaddle = Math.abs(ny - (-8)) < 1 && Math.abs(nx - paddleX) < paddleWidth/2;
      
      if (distToBall < 1 || distToPaddle) {
        bug.active = false;
        store.incrementBtsBugs();
        store.addBtsXp(250);
        addParticle({
          id: Math.random().toString(),
          text: "BUG FIXED ✓",
          x: bug.x, y: bug.y, z: bug.z,
          life: 1.5, maxLife: 1.5,
          color: "#22c55e"
        });
      }
    }
    
    if (hitAny) {
      engine.setBricks(newBricks);
    }
    
    // Level Complete check
    const activeBricksCount = newBricks.filter(b => b.active).length;
    if (activeBricksCount === 0 && bricks.length > 0) {
      setGameState('levelComplete');
      setTimeout(() => {
        if (store.bts_level < 5) {
          store.setBtsLevel(store.bts_level + 1);
          setGameState('start');
        } else {
          setGameState('gameWon');
          store.setSystemHealed(true);
        }
      }, 2000);
    }
    
    // Apply updates
    setBallPos([nx, ny, 0]);
    setBallVel([vx, vy, 0]);
  });

  return null;
}

const Borders = () => {
  return (
    <>
      {/* Left Wall */}
      <mesh position={[-10.5, 1, 0]}>
        <boxGeometry args={[1, 24, 2]} />
        <meshStandardMaterial color="#1e293b" emissive="#1e293b" emissiveIntensity={0.5} />
      </mesh>
      {/* Right Wall */}
      <mesh position={[10.5, 1, 0]}>
        <boxGeometry args={[1, 24, 2]} />
        <meshStandardMaterial color="#1e293b" emissive="#1e293b" emissiveIntensity={0.5} />
      </mesh>
      {/* Top Wall */}
      <mesh position={[0, 12.5, 0]}>
        <boxGeometry args={[22, 1, 2]} />
        <meshStandardMaterial color="#1e293b" emissive="#1e293b" emissiveIntensity={0.5} />
      </mesh>
    </>
  );
};

export const BreakTheStack = () => {
  const { bts_gameActive } = useStore();
  
  if (!bts_gameActive) return null;

  return (
    <div className={styles.gameContainer}>
      <GameUI />
      <Canvas 
        camera={{ position: [0, -2, 20], fov: 60 }} 
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, 10]} intensity={1} />
        
        <Paddle />
        <Ball />
        <Bricks />
        <Particles />
        <Bugs />
        <Borders />
        
        <GameEngine />
      </Canvas>
    </div>
  );
};
