import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('expensio:user');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (err) {
      console.error('Failed to parse user from localStorage', err);
    }
    // Default fallback user so app is welcoming out of the box
    return { name: 'Sattu', email: 'sattu.kumar@example.com' };
  });

  const login = (userData) => {
    const safeUser = {
      name: userData.name || (userData.email ? userData.email.split('@')[0] : 'Sattu'),
      email: userData.email || 'user@example.com',
    };
    setUser(safeUser);
    try {
      localStorage.setItem('expensio:user', JSON.stringify(safeUser));
    } catch (err) {
      console.error('Failed to save user to localStorage', err);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('expensio:user');
    } catch (err) {
      console.error('Failed to remove user from localStorage', err);
    }
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;

