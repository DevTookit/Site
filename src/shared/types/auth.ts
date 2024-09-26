//! login
export type LoginCredentials = {
  username: string;
  email: string; // 수정: 'eamil' -> 'email'
  password: string;
};

export type Token = {
  grantType: string;
  accessToken: string;
  refreshToken: string;
};

export type LoginResponse = {
  token: Token;
  email: string;
  id: number;
};

//! token
export type TokenResponse = Token; // Assuming the response is similar to Token

//! createUser
export type CreateUserData = {
  username: string;
  email: string;
  password: string;
};

export type CreateUserResponse = {
  id: number;
  username: string;
  email: string;
};

//! verifyEmail
export type VerifyEmailResponse = {
  success: boolean;
  message: string;
};

//! confirmEmailVerification
export type ConfirmEmailResponse = {
  success: boolean;
  message: string;
};

//! updateUserInfo
export type UpdateUserInfo = {
  username?: string;
  email?: string;
  password?: string;
};

export type UpdateResponse = {
  success: boolean;
  message: string;
};

//! resetPassword
export type ResetPasswordData = {
  email: string;
  newPassword: string;
};

export type ResetPasswordResponse = {
  success: boolean;
  message: string;
};

//! getUserById
export type UserResponse = {
  id: number;
  username: string;
  email: string;
};

//! getMyInfo
export type MyInfoResponse = {
  id: number;
  username: string;
  email: string;
};

//! findUserEmail
export type FindEmailData = {
  username: string;
};

export type FindEmailResponse = {
  email: string;
};
