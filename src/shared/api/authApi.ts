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
} from '../types/authApi';

//! 유저 생성
const createUser = async (
  userData: CreateUserData,
): Promise<CreateUserResponse> => {
  const response = await api.post<CreateUserResponse>(
    '/v1/users/create',
    userData,
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
    '/v1/users/verify-email',
    { code, email },
  );
  return response.data;
};

//! 토큰 발급
const issueToken = async (): Promise<TokenResponse> => {
  const response = await api.post<TokenResponse>('/v1/users/token');
  return response.data;
};

//! 로그인
const loginUser = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    '/v1/users/login',
    credentials,
  );
  useAuthStore.getState().setToken(response.data.token.accessToken);
  return response.data;
};

//! 내 정보 수정
const updateUserInfo = async (
  userInfo: UpdateUserInfo,
): Promise<UpdateResponse> => {
  const response = await api.patch<UpdateResponse>(
    '/v1/users/update',
    userInfo,
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
