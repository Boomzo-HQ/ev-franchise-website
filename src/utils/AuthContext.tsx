"use client";

import { LOCAL_STORAGE_USER } from "../types/enums";
import { USER } from "../types/userType";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type AuthContextType = {
  user: USER | null;
  isLoggedIn: boolean;
  firstCheck: boolean;
  signIn: (user: USER) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<USER | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstCheck, setfirstCheck] = useState(false);


  useEffect(() => {
    const storedUserData = localStorage.getItem(LOCAL_STORAGE_USER);
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
      setIsLoggedIn(true);
      setfirstCheck(true);
    }
  }, []);

  const signIn = async (user: USER) => {
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
  
  };

  const signOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem(LOCAL_STORAGE_USER);
  };

  // Optionally, handle the session check (e.g., check for an existing auth token)
  useEffect(() => {
    const checkUserSession = () => {
      // Implement session checking logic here
      // For example, check local storage or cookie for auth token
      // and set user state based on that
    };
    checkUserSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, firstCheck, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
