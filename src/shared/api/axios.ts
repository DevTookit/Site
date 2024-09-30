import axios, { InternalAxiosRequestConfig } from 'axios';
import { getToken } from '../util/tokenUtil';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
});

// 요청 시 로그인 토큰을 헤더에 추가하는 인터셉터
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// api.interceptors.response.use(
//   (response) => response, // 정상 응답은 그대로 반환
//   async (error) => {
//     const refreshToken = getRefreshToken();
//     const originalRequest = error.config;

//     // 만약 401 Unauthorized 오류가 발생했을 경우
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // 재시도 플래그 추가

//       try {
//         // 리프레시 토큰으로 새로운 액세스 토큰 요청

//         const response = await authApi.issueToken(refreshToken ?? '');

//         const newAccessToken = response.accessToken;
//         setToken(newAccessToken);

//         // 재시도하는 요청에 새로운 토큰 추가
//         originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

//         return api(originalRequest); // 원래 요청 재호출
//       } catch (refreshError) {
//         // 리프레시 토큰 요청 실패 시 에러 처리
//         console.error('Refresh token error:', refreshError);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error); // 그 외 오류는 그대로 반환
//   },
// );

export default api;
