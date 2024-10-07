import axios, { InternalAxiosRequestConfig } from 'axios';
import { getRefreshToken, getToken, setToken } from '../util/tokenUtil';
import authApi from './authApi';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
});

// 요청 시 로그인 토큰을 헤더에 추가하는 인터셉터
api.interceptors.request.use(
  async (config): Promise<InternalAxiosRequestConfig<any>> => {
    const token = getToken(); // 현재 토큰 가져오기

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error); // 에러 발생 시 reject
  },
);

let isTokenRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];
// 토큰 리프레시를 구독하는 함수
function subscribeTokenRefresh(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

// 토큰이 갱신된 후 호출되는 함수
function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = []; // 모든 구독자 호출 후 초기화
}

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response; // 정상 응답 처리
  },
  async (error) => {
    const originalRequest = error.config;

    // 토큰 만료 시 토큰 갱신 로직 처리
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 재시도 플래그 설정

      if (!isTokenRefreshing) {
        isTokenRefreshing = true;

        try {
          const refreshToken = getRefreshToken(); // 리프레시 토큰 가져오기
          if (refreshToken) {
            const response = await authApi.issueToken(refreshToken); // 토큰 갱신 요청
            const newToken = response.accessToken;
            setToken(newToken); // 새 토큰 저장
            onRefreshed(newToken); // 구독자들에게 알림
            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
            return api(originalRequest); // 재시도
          }
        } catch (error) {
          // 토큰 갱신 실패 시 로그아웃 처리 등
          console.error(error);
        } finally {
          isTokenRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((newToken) => {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          resolve(api(originalRequest)); // 갱신된 토큰으로 재시도
        });
      });
    }

    return Promise.reject(error); // 다른 에러는 그대로 처리
  },
);

export default api;
