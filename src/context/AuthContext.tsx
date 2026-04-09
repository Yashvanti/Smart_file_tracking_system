import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (username: string) => void;
  logout: () => void;
}

const AUTH_KEY = 'smart_file_tracking_auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() => {
    const saved = localStorage.getItem(AUTH_KEY);
    return saved ? JSON.parse(saved) : { isAuthenticated: false, user: null };
  });

  const login = (username: string) => {
    const newState = { isAuthenticated: true, user: username };
    setAuth(newState);
    localStorage.setItem(AUTH_KEY, JSON.stringify(newState));
  };

  const logout = () => {
    const newState = { isAuthenticated: false, user: null };
    setAuth(newState);
    localStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
