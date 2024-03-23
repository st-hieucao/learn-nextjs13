import { create } from 'zustand';

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: any): any => set({ bears: newBears }),

  postDetail: null,
  savePost: (data: any) => set(() => ({ postDetail: data })),
}));
