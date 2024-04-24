import  { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  logout: () => void
}

export const useUserStore = create<UserStore>(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user, isLoggedIn: true }),
        isLoggedIn: false,
        setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
        logout: () => set({ user: null, isLoggedIn: false })
      }),
      {
        name: 'user-storage', 
      }
    )
  );