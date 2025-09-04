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
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
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

      // Fetch user profile
      fetch("http://localhost:8081/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch user");
          return res.json();
        })
        .then((data) => {
          setUser(data.user);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
        });
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await fetch("http://localhost:8081/auth/signin", {
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

  const signUp = async (username: string, email: string, password: string) => {
    const response = await fetch("http://localhost:8081/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, email, password }),
    });

    if (!response.ok) throw new Error("Invalid credentials");

    const data = await response.json();
    console.log(data, "data signup");

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
    <AuthContext.Provider value={{ user, token, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
