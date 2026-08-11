import { create } from 'zustand';

export type BrickType = 'tech' | 'project' | 'experience' | 'boss';

export interface BrickData {
  id: string;
  type: BrickType;
  label: string;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  depth: number;
  hp: number;
  maxHp: number;
  color: string;
  active: boolean;
  isBoss?: boolean;
}

export interface BugData {
  id: string;
  label: string;
  x: number;
  y: number;
  z: number;
  active: boolean;
}

export interface ParticleData {
  id: string;
  text: string;
  x: number;
  y: number;
  z: number;
  life: number;
  maxLife: number;
  color: string;
}

interface GameEngineState {
  ballPos: [number, number, number];
  ballVel: [number, number, number];
  paddleX: number;
  paddleWidth: number;
  
  bricks: BrickData[];
  bugs: BugData[];
  particles: ParticleData[];
  
  gameState: 'start' | 'playing' | 'lostLife' | 'levelComplete' | 'gameWon' | 'gameOver';
  
  setBallPos: (pos: [number, number, number]) => void;
  setBallVel: (vel: [number, number, number]) => void;
  setPaddleX: (x: number) => void;
  setBricks: (bricks: BrickData[]) => void;
  setGameState: (state: GameEngineState['gameState']) => void;
  
  addParticle: (particle: ParticleData) => void;
  updateParticles: (delta: number) => void;
  
  addBug: (bug: BugData) => void;
  updateBugs: (delta: number) => void;
}

export const useGameEngine = create<GameEngineState>((set) => ({
  ballPos: [0, -6, 0],
  ballVel: [0, 0, 0],
  paddleX: 0,
  paddleWidth: 3,
  
  bricks: [],
  bugs: [],
  particles: [],
  
  gameState: 'start',
  
  setBallPos: (pos) => set({ ballPos: pos }),
  setBallVel: (vel) => set({ ballVel: vel }),
  setPaddleX: (x) => set({ paddleX: x }),
  setBricks: (bricks) => set({ bricks }),
  setGameState: (state) => set({ gameState: state }),
  
  addParticle: (particle) => set((state) => ({ particles: [...state.particles, particle] })),
  updateParticles: (delta) => set((state) => ({
    particles: state.particles
      .map(p => ({ ...p, life: p.life - delta, y: p.y + delta * 2 }))
      .filter(p => p.life > 0)
  })),
  
  addBug: (bug) => set((state) => ({ bugs: [...state.bugs, bug] })),
  updateBugs: (delta) => set((state) => ({
    bugs: state.bugs
      .map(b => ({ ...b, y: b.y - delta * 3 })) // Falling down
      .filter(b => b.y > -15) // Remove if fell past bottom
  })),
}));
