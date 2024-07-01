import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useUserStore = create(
  persist(
    (set) => ({
      user: {},
      setUser: (newUser: object) => set({ user: newUser }),
    }),
    {
      name: 'user'
    }
  )
);