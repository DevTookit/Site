// shared/utils/tokenUtil.ts

import { setCookie, getCookie, deleteCookie } from './cookieUtil';

const TOKEN_KEY = 'authToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

/**
 * 토큰을 설정하는 함수
 * @param {string} token - 설정할 토큰
 * @param {number} days - 만료일 (일 수)
 */
export const setToken = (token: string, days: number = 1 / 96) => {
  setCookie(TOKEN_KEY, token, days);
};

/**
 * 리프레시 토큰을 설정하는 함수
 * @param {string} refreshToken - 설정할 리프레시 토큰
 * @param {number} days - 만료일 (일 수)
 */
export const setRefreshToken = (refreshToken: string, days: number = 14) => {
  setCookie(REFRESH_TOKEN_KEY, refreshToken, days);
};

/**
 * 토큰을 가져오는 함수
 * @returns {string|null} - 토큰 값 또는 null
 */
export const getToken = (): string | null => {
  return getCookie(TOKEN_KEY);
};

/**
 * 리프레시 토큰을 가져오는 함수
 * @returns {string|null} - 리프레시 토큰 값 또는 null
 */
export const getRefreshToken = (): string | null => {
  return getCookie(REFRESH_TOKEN_KEY);
};

/**
 * 토큰을 제거하는 함수
 */
export const clearToken = () => {
  deleteCookie(TOKEN_KEY);
};

/**
 * 토큰의 유효성을 검사하는 함수
 * @returns {boolean} - 토큰 유효 여부
 */
export const isTokenValid = (): boolean => {
  return getToken() !== null;
};
