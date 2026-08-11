import type { BrickData, BrickType } from './useGameEngine';

const colors = {
  tech: "#3b82f6",
  project: "#a855f7",
  experience: "#eab308",
  boss: "#ef4444"
};

const levels = [
  // LEVEL 01 - BOOT
  [
    { type: 'tech' as BrickType, label: 'JAVASCRIPT', row: 0, col: -1 },
    { type: 'tech' as BrickType, label: 'TYPESCRIPT', row: 0, col: 0 },
    { type: 'tech' as BrickType, label: 'REACT', row: 0, col: 1 },
  ],
  // LEVEL 02 - MOBILE
  [
    { type: 'tech' as BrickType, label: 'REACT NATIVE', row: 1, col: -1.5 },
    { type: 'tech' as BrickType, label: 'ANDROID', row: 1, col: 0 },
    { type: 'tech' as BrickType, label: 'iOS', row: 1, col: 1.5 },
    { type: 'tech' as BrickType, label: 'KOTLIN', row: 0, col: -0.8 },
    { type: 'tech' as BrickType, label: 'SWIFT', row: 0, col: 0.8 },
  ],
  // LEVEL 03 - BACKEND
  [
    { type: 'tech' as BrickType, label: 'NODE.JS', row: 2, col: -2 },
    { type: 'tech' as BrickType, label: 'PHP', row: 2, col: -0.7 },
    { type: 'tech' as BrickType, label: 'REST', row: 2, col: 0.7 },
    { type: 'tech' as BrickType, label: 'GRAPHQL', row: 2, col: 2 },
    { type: 'project' as BrickType, label: 'BITCOINTAF', row: 0, col: -1.5, hp: 2 },
    { type: 'project' as BrickType, label: 'SPARISSIMO', row: 0, col: 0, hp: 2 },
    { type: 'project' as BrickType, label: 'CLOUDMLM', row: 0, col: 1.5, hp: 2 },
  ],
  // LEVEL 04 - CLOUD
  [
    { type: 'experience' as BrickType, label: '16+ YEARS EXPERIENCE', row: 3, col: 0, hp: 3, width: 8 },
    { type: 'experience' as BrickType, label: '20+ APPS SHIPPED', row: 2, col: 0, hp: 3, width: 6 },
    { type: 'tech' as BrickType, label: 'AWS', row: 0, col: -1.5 },
    { type: 'tech' as BrickType, label: 'FIREBASE', row: 0, col: -0.5 },
    { type: 'tech' as BrickType, label: 'CI/CD', row: 0, col: 0.5 },
    { type: 'tech' as BrickType, label: 'GIT', row: 0, col: 1.5 },
  ],
  // LEVEL 05 - BOSS
  [
    { type: 'boss' as BrickType, label: 'LEGACY CODE', row: 1, col: 0, hp: 50, width: 10, height: 4 }
  ]
];

export const LevelManager = {
  loadLevel: (levelIndex: number, setBricks: (bricks: BrickData[]) => void) => {
    const rawLevel = levels[Math.min(levelIndex - 1, levels.length - 1)];
    
    const bricks: BrickData[] = rawLevel.map((rawB, i) => {
      const b = rawB as any;
      const width = b.width || 3;
      const height = b.height || 1;
      
      return {
        id: `brick-${levelIndex}-${i}`,
        type: b.type,
        label: b.label,
        x: b.col * 3.5,
        y: 8 - (b.row * 2),
        z: 0,
        width,
        height,
        depth: 0.5,
        hp: b.hp || 1,
        maxHp: b.hp || 1,
        color: colors[b.type as BrickType],
        active: true,
        isBoss: b.type === 'boss'
      };
    });
    
    setBricks(bricks);
  }
};
