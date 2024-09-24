import axios, { InternalAxiosRequestConfig } from 'axios';
import useAuthStore from '../store/authStore';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'https://example.com/api',
  timeout: 3000,
});

// 요청 시 로그인 토큰을 헤더에 추가하는 인터셉터
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { token } = useAuthStore.getState();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
