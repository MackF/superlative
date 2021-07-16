import React, { useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let value = false;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
