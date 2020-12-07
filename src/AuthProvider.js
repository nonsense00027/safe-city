import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const innitialState = {};
export const AuthContext = createContext(innitialState);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (authUser) => {
    setUser(authUser);
    AsyncStorage.setItem("user", JSON.stringify(authUser));
  };
  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
