const tokenKey = 'authData';
type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: Number;
  scope: string;
  userFirstName: string;
  userId: number;
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
