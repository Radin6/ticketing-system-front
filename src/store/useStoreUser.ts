import { create } from "zustand";
import { persist } from "zustand/middleware"
import { IUser } from "../types/userTypes"

interface UserState {
  user: IUser | null;
  setUser: (newUser: IUser | null) => void;
}

export const useStoreUser = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (newUser: IUser | null) => set({ user: newUser }),
    }),
    {
      name: 'user-storage'
    }
  )
);