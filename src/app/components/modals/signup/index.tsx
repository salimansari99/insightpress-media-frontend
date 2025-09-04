"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";

type SignUpProps = {
  setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignUp({ setIsSignUpOpen, setIsSignOpen }: SignUpProps) {
  const { signUp } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(username, email, password);
      setIsSignUpOpen(false);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleSignin = () => {
    setIsSignUpOpen(false);
    setIsSignOpen(true); // ✅ switch back to signin
  };


  return (
    <>
      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1091;
        }
        .modal {
          width: 480px;
          height: 490px;
          background: #f3f3f3;
          padding: 32px;
          position: relative;
        }
        .cls-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
        .field {
          width: 100%;
          margin: 12px 6px;
          padding: 5px;
          display: flex;
          flex-direction: column;
        }
        .field label {
          font-size: 14px;
          margin-bottom: 5px;
        }
        .field input {
          padding: 12px 6px;
          border: 1px solid #000;
          border-radius: 5px;
        }
        .login {
          width: 100%;
          margin: 12px 6px;
          padding: 12px 6px;
          border: 1px solid #000;
          border-radius: 5px;
          background-color: var(--blue);
          color: var(--white);
          font-size: 18px;
        }
        .signin {
          text-align: center;
          margin-top: 12px;
        }
        .signin button {
          color: var(--blue);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
      `}</style>
      <div className="modal-overlay">
        <div className="modal">
          <span className="cls-btn" onClick={() => setIsSignUpOpen(false)}>
            X
          </span>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="username">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="login">
            Sign Up
          </button>
          <hr />
          <p className="signin">Already have an account? <button onClick={handleSignin}>Sign In</button></p>
        </div>
      </div>
    </>
  );
}
