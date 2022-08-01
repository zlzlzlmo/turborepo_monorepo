import create from "zustand";

type Store = {
  user: string | null;
  score: number;
  setUser: (user: string | null) => void;
  addToScore: (amount: number) => void;
};

export const useAppShell = create<Store>((set, get) => ({
  user: null,
  score: 0,
  setUser(user) {
    set(() => ({ user }));
  },
  addToScore() {
    set((state) => ({ score: state.score + 1 }));
  },
}));
