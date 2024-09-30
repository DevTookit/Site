// shared/utils/cookieUtil.ts

import Cookies from 'js-cookie';

/**
 * 쿠키를 설정하는 함수
 * @param {string} name - 쿠키 이름
 * @param {string} value - 쿠키 값
 * @param {number} days - 만료일 (일 수)
 */
export const setCookie = (name: string, value: string, days: number) => {
  Cookies.set(name, value, {
    expires: days,
    secure: true,
    sameSite: 'Strict',
  });
};

/**
 * 쿠키를 가져오는 함수
 * @param {string} name - 쿠키 이름
 * @returns {string|null} - 쿠키 값 또는 null
 */
export const getCookie = (name: string): string | null => {
  return Cookies.get(name) || null;
};

/**
 * 쿠키를 삭제하는 함수
 * @param {string} name - 쿠키 이름
 */
export const deleteCookie = (name: string) => {
  Cookies.remove(name);
};
