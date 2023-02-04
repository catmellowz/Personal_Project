import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import * as authApi from '../apis/auth-api';
import {
  getAccessToken,
  setAccessToken,
} from '../util/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  const login = async (emailOrUsername, password) => {
    const res = await authApi.login({ emailOrUsername, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
