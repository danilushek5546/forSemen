import type { AuthType, UserType } from '../types/userTypes';
import host from './index';

const login = async (request: AuthType): Promise<UserType> => {
  const data = await host.post('auth/login', request);

  localStorage.setItem('token', data.data.token);

  return data.data.user;
};

const registration = async (request: AuthType): Promise<UserType> => {
  const data = await host.post('auth/registration', request);

  localStorage.setItem('token', data.data.token);

  return data.data.user;
};

const checkAuth = async (): Promise<UserType> => {
  const data = await host.get('api/auth/');

  return data.data.user;
};

export default {
  login,
  registration,
  checkAuth,
};