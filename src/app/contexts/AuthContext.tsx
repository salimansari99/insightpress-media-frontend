// src/context/AuthContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  console.log(user, "???????????333");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      // Optionally: fetch user profile using savedToken
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Invalid credentials");

    const data = await response.json();
    console.log(data, "data signIn");

    setToken(data.token);
    localStorage.setItem("token", data.token);

    setUser(data.user); // backend should return user info along with token
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
