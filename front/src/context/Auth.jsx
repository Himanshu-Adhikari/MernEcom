import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function Auth({ children }) {
  const initialuser = localStorage.getItem("Users");
  const [authUser, setauthUSer] = useState(
    initialuser ? JSON.parse(initialuser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setauthUSer]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
