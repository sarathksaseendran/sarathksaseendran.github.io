import { create } from 'zustand';

export type CharacterAnimationState = 'idle' | 'walking' | 'typing' | 'interacting' | 'sitting';

interface JourneyState {
  progress: number;
  setProgress: (p: number) => void;
  
  characterState: CharacterAnimationState;
  setCharacterState: (state: CharacterAnimationState) => void;
  
  // A generic way to communicate the physical location of the character to the UI
  currentZone: number;
  setCurrentZone: (zone: number) => void;
}

export const useJourneyStore = create<JourneyState>((set) => ({
  progress: 0,
  setProgress: (p) => set({ progress: p }),
  
  characterState: 'idle',
  setCharacterState: (state) => set({ characterState: state }),
  
  currentZone: 0,
  setCurrentZone: (zone) => set({ currentZone: zone }),
}));
