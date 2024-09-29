// shared/store/authStore.ts
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  id: number | null;
  email: string | null;
  name: string | null;
  img: string | null;
  tags: string[];
  setToken: (token: string) => void;
  clearToken: () => void;
  setUserInfo: (
    userInfo: Omit<
      AuthState,
      'setToken' | 'token' | 'clearToken' | 'setUserInfo'
    >,
  ) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  id: null,
  email: '',
  name: '',
  img: '',
  tags: [],
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  setUserInfo: (userInfo) =>
    set({
      id: userInfo.id,
      email: userInfo.email,
      name: userInfo.name,
      img: userInfo.img,
      tags: userInfo.tags,
    }),
  clearUserInfo: () =>
    set({
      id: null,
      email: '',
      name: '',
      img: '',
      tags: [],
    }),
}));

export default useAuthStore;
