import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedInUsername, setLoggedInUsername] = useState(() => {
    // Retrieve the stored username from localStorage or set to null if not available
    return localStorage.getItem('loggedInUsername');
  });

  const login = (username) => {
    setLoggedInUsername(username);
    localStorage.setItem('loggedInUsername', username); // Store username in localStorage
  };

  const logout = () => {
    setLoggedInUsername(null);
    localStorage.removeItem('loggedInUsername'); // Remove username from localStorage
  };

  return (
    <AuthContext.Provider value={{ loggedInUsername, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
