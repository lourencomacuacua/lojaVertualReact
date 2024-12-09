import axios, { AxiosRequestConfig } from 'axios';
import { config } from 'process';
import qs from 'qs';
import { navigate } from './navigateHelper';
import { jwtDecode } from 'jwt-decode';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: Number;
  scope: string;
  userFirstName: string;
  userId: number;
};

type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';
export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const tokenKey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

const basicHeader = () => {};

type LoginData = {
  username: string;
  password: string;
};
export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });
  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;
  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem('authData', JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? '{}';
  return JSON.parse(str) as LoginResponse;
};

export const removeAuthDate = () => {
  localStorage.removeItem(tokenKey);
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      window.location.replace('/admin/auth');
    }
    return Promise.reject(error);
  }
);

const handleLogin = (token: string) => {
  localStorage.setItem('authToken', token);
  window.location.reload(); // Garante recarregamento da aplicação
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};
