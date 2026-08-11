import { create } from 'zustand';

interface AppState {
  activeSection: number;
  setActiveSection: (section: number) => void;
  
  // Easter Egg
  developerMode: boolean;
  setDeveloperMode: (mode: boolean) => void;
  
  // Game State (Break The Stack)
  bts_gameActive: boolean;
  setBtsGameActive: (active: boolean) => void;
  bts_xp: number;
  bts_level: number;
  bts_lives: number;
  bts_combo: number;
  bts_bricksDestroyed: number;
  bts_projectsDiscovered: number;
  bts_bugsFixed: number;
  
  // Actions
  addBtsXp: (amount: number) => void;
  setBtsLevel: (level: number) => void;
  loseBtsLife: () => void;
  resetBtsCombo: () => void;
  incrementBtsCombo: () => void;
  incrementBtsBricks: () => void;
  incrementBtsProjects: () => void;
  incrementBtsBugs: () => void;
  resetBtsGame: () => void;
  
  systemHealed: boolean;
  setSystemHealed: (healed: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: 0,
  setActiveSection: (section) => set({ activeSection: section }),
  
  developerMode: false,
  setDeveloperMode: (mode) => set({ developerMode: mode }),
  
  bts_gameActive: false,
  setBtsGameActive: (active) => set({ bts_gameActive: active }),
  
  bts_xp: 0,
  bts_level: 1,
  bts_lives: 3,
  bts_combo: 0,
  bts_bricksDestroyed: 0,
  bts_projectsDiscovered: 0,
  bts_bugsFixed: 0,
  
  addBtsXp: (amount) => set((state) => ({ bts_xp: state.bts_xp + amount })),
  setBtsLevel: (level) => set({ bts_level: level }),
  loseBtsLife: () => set((state) => ({ bts_lives: Math.max(0, state.bts_lives - 1) })),
  resetBtsCombo: () => set({ bts_combo: 0 }),
  incrementBtsCombo: () => set((state) => ({ bts_combo: state.bts_combo + 1 })),
  incrementBtsBricks: () => set((state) => ({ bts_bricksDestroyed: state.bts_bricksDestroyed + 1 })),
  incrementBtsProjects: () => set((state) => ({ bts_projectsDiscovered: state.bts_projectsDiscovered + 1 })),
  incrementBtsBugs: () => set((state) => ({ bts_bugsFixed: state.bts_bugsFixed + 1 })),
  
  resetBtsGame: () => set({
    bts_xp: 0,
    bts_level: 1,
    bts_lives: 3,
    bts_combo: 0,
    bts_bricksDestroyed: 0,
    bts_projectsDiscovered: 0,
    bts_bugsFixed: 0,
    systemHealed: false
  }),

  systemHealed: false,
  setSystemHealed: (healed) => set({ systemHealed: healed }),
}));
