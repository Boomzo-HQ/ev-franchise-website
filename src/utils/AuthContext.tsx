"use client";

import { useRouter } from "next/navigation";
import { LOCAL_STORAGE_USER } from "../types/enums";
import { USER } from "../types/userType";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";

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

  const router = useRouter();

  useEffect(() => {
    const storedUserData = localStorage.getItem(LOCAL_STORAGE_USER);
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const decodedToken = jwtDecode<{ exp: number }>(userData.token);
      const isTokenExpired = decodedToken.exp * 1000 < Date.now();

      if (isTokenExpired) {
        signOut(); // Logout if the token is expired
      } else {
        setUser(JSON.parse(storedUserData));
        setIsLoggedIn(true);
      }
    }
    setfirstCheck(true);
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

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, firstCheck, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
