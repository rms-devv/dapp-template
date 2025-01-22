import { create } from 'zustand';


interface UserState {
  address: `0x${string}` | null;
  setAddress: (address: `0x${string}`  | null) => void;
  clearAddress: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  address: null,
  setAddress: (address) => set({ address }),
  clearAddress: () => set({ address: null }),
}));