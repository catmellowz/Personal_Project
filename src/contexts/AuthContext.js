const { createContext } = require('react');

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return (
    <AuthContextProvider value={'Auth Context'}>
      {children}
    </AuthContextProvider>
  );
}
