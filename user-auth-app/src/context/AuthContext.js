import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password, navigate) => {
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const logout = (navigate) => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Fix: useAuth hook
export const useAuth = () => useContext(AuthContext);
