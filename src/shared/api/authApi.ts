import api from './axios';
import useAuthStore from '../store/authStore';

import {
  ConfirmEmailResponse,
  CreateUserData,
  CreateUserResponse,
  FindEmailData,
  FindEmailResponse,
  LoginCredentials,
  LoginResponse,
  MyInfoResponse,
  ResetPasswordData,
  ResetPasswordResponse,
  TokenResponse,
  UpdateResponse,
  UpdateUserInfo,
  UserResponse,
  VerifyEmailResponse,
} from '../types/authType';
import { setRefreshToken, setToken } from '../util/tokenUtil';
import Cookies from 'js-cookie';

//! 유저 생성
const createUser = async (
  userData: CreateUserData,
): Promise<CreateUserResponse> => {
  const formData = new FormData();
  formData.append(
    'UserCreateRequest',
    JSON.stringify({
      email: userData.email,
      name: userData.name,
      password: userData.password,
      tags: null,
      job: null,
    }),
  );
  formData.append('img', '');

  const response = await api.post<CreateUserResponse>(
    '/v1/users/create',
    formData,
    {
      headers: {
        Accept: '*/*',
        'Content-Type': 'multipart/form-data', // 헤더 설정
      },
    },
  );
  return response.data;
};

//! 이메일 인증코드 발송
const getVerifyEmail = async (email: string) => {
  const response = await api.get<VerifyEmailResponse>(
    `/v1/users/verify-email?email=${email}`,
  );
  return response.data;
};
//! 이메일 인증 성공시
const confirmEmailVerification = async (
  code: string,
  email: string,
): Promise<ConfirmEmailResponse> => {
  const response = await api.patch<ConfirmEmailResponse>(
    `/v1/users/verify-email?code=${code}&email=${email}`,
  );
  return response.data;
};

const issueToken = async (refreshToken: string): Promise<TokenResponse> => {
  try {
    const response = await api.post<TokenResponse>(
      '/v1/users/token',
      refreshToken,
      {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Token refresh error:', error);

    // 쿠키에서 refreshToken 삭제
    Cookies.remove('refreshToken');

    // 에러를 호출하는 쪽으로 전달
    return Promise.reject(error);
  }
};

//! 로그인
const loginUser = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    '/v1/users/login',
    credentials,
  );
  useAuthStore
    .getState()
    .setOnBoardingComplete(response.data.isOnBoardingComplete);
  setToken(response.data.token.accessToken);
  setRefreshToken(response.data.token.refreshToken);
  return response.data;
};

//! 내 정보 수정 profile_create_img_id
const updateUserInfo = async (
  userInfo: UpdateUserInfo,
): Promise<UpdateResponse> => {
  const fileInput: any = document.getElementById('profileImageUpload');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append(
    'UserUpdateRequest',
    JSON.stringify({
      name: userInfo.name,
      tags: userInfo.tags,
      job: userInfo.job,
    }),
  );
  formData.append('img', file);
  const response = await api.patch<UpdateResponse>(
    '/v1/users/update',
    formData,
    {
      headers: {
        Accept: '*/*',
        'Content-Type': 'multipart/form-data', // 헤더 설정
      },
    },
  );

  return response.data;
};

//! 비밀번호 찾기(재설정)
const resetPassword = async (
  resetData: ResetPasswordData,
): Promise<ResetPasswordResponse> => {
  const response = await api.patch<ResetPasswordResponse>(
    '/v1/users/reset-password',
    resetData,
  );
  return response.data;
};

//! 한 회원 검색
const getUserById = async (userId: string): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`/v1/users/${userId}`);
  return response.data;
};

//! 내 정보 조회
const getMyInfo = async (): Promise<MyInfoResponse> => {
  const response = await api.get<MyInfoResponse>('/v1/users/me');
  useAuthStore.getState().setUserInfo(response.data);
  return response.data;
};

//! 아이디 찾기
const findUserEmail = async (
  findData: FindEmailData,
): Promise<FindEmailResponse> => {
  const response = await api.get<FindEmailResponse>('/v1/users/find-email', {
    params: findData,
  });
  return response.data;
};

const authApi = {
  getVerifyEmail,
  issueToken,
  loginUser,
  createUser,
  confirmEmailVerification,
  getUserById,
  updateUserInfo,
  resetPassword,
  getMyInfo,
  findUserEmail,
};

export default authApi;

// export default { login, logout };
