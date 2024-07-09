import { create } from "zustand";

interface IuseSidebar {
  isLeftsidebarOpen: boolean;
  setIsLeftsidebarOpen: (state: boolean) => void;
}

export const useSidebar = create<IuseSidebar>((set) => ({
  isLeftsidebarOpen: false,
  setIsLeftsidebarOpen: (state: boolean) => set({ isLeftsidebarOpen: state }),
}));
