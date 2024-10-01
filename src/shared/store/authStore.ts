// shared/store/authStore.ts
import { create } from 'zustand';
import authApi from '../api/authApi';
import {
  clearToken,
  getRefreshToken,
  getToken,
  setToken,
} from '../util/tokenUtil';

interface AuthState {
  id: number | null;
  userEmail: string | null;
  userName: string | null;
  userImg: string | null;
  userJob: string | null;
  userTags: string[];
  isOnBoardingComplete: boolean;
  setOnBoardingComplete: (bool: boolean) => void;
  setUserInfo: (userInfo: {
    id: number;
    email: string;
    name: string;
    img: string;
    tags: string[];
    job: string;
  }) => void;
  fetchUserInfo: () => void; // 사용자 정보를 불러오는 함수
  clearUserInfo: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  id: null,
  userEmail: '',
  userName: '',
  userImg: '',
  userJob: '',
  userTags: [],
  isOnBoardingComplete: false,

  setOnBoardingComplete: (bool: boolean) => set({ isOnBoardingComplete: bool }),
  // 사용자 정보를 zustand 상태에 저장
  setUserInfo: (userInfo) =>
    set({
      id: userInfo.id,
      userEmail: userInfo.email,
      userName: userInfo.name,
      userImg: userInfo.img,
      userJob: userInfo.job,
      userTags: userInfo.tags,
    }),

  // 페이지 로드시 토큰이 있으면 사용자 정보를 서버에서 불러옴
  fetchUserInfo: async () => {
    let token = getToken();
    const refreshToken = getRefreshToken();
    console.log(!token && refreshToken);
    if (!token && refreshToken) {
      const data = await authApi.issueToken(refreshToken);
      setToken(data.accessToken);
    }
    token = getToken();

    if (token) {
      try {
        authApi.getMyInfo();
      } catch (error) {
        console.error('Failed to fetch user info', error);
        // 토큰이 유효하지 않으면 토큰과 사용자 정보를 제거
        clearToken();
      }
    }
  },

  clearUserInfo: () =>
    set({
      id: null,
      userEmail: '',
      userName: '',
      userImg: '',
      userTags: [],
    }),
}));

export default useAuthStore;
