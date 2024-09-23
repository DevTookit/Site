// contextStore.ts
import { create } from 'zustand';

interface ContextMenuState {
  x: number;
  y: number;
  isVisible: boolean;
  showContextMenu: (x: number, y: number) => void;
  hideContextMenu: () => void;
}
const useContextMenuStore = create<ContextMenuState>((set) => ({
  x: 0,
  y: 0,
  isVisible: false,
  showContextMenu: (x: number, y: number) => {
    console.log(x, y);
    set({ x, y, isVisible: true });
  },
  hideContextMenu: () => set({ isVisible: false }),
}));

export default useContextMenuStore;
