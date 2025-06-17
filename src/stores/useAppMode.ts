import { create } from 'zustand';

type AppMode = 'safe' | 'config';

interface AppModeState {
    mode: AppMode;
    toggleMode: () => void;
    setMode: (mode: AppMode) => void;
}

export const useAppMode = create<AppModeState>((set) => ({
    mode: 'safe',
    toggleMode: () =>
        set((state) => ({ mode: state.mode === 'safe' ? 'config' : 'safe' })),
    setMode: (mode) => set({ mode }),
}));
