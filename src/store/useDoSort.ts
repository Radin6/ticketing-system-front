import { create } from "zustand";

interface IUseDoStore {
  doSort: string;
  setDoSort: (state: string) => void;
}

export const useDoSort = create<IUseDoStore>((set) => ({
  doSort: "",
  setDoSort: (state: string) => set({ doSort: state })
}))