import api from './axios';
import { useAuthStore } from '../store/authStore';

type LoginCredentials = {
  username: string;
  password: string;
};

type Token = {
  grantType: string;
  accessToken: string;
  refreshToken: string;
};

type LoginResponse = {
  token: Token;
  email: string;
  id: number;
};

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', credentials);
  useAuthStore.getState().setToken(response.data.token.accessToken);
  return response.data;
};

const logout = (): void => {
  useAuthStore.getState().clearToken();
};

const authApi = {
  login,
  logout,
};

export default authApi;

// export default { login, logout };
