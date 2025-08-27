"use client";
import React, { useState} from "react";
import { useAuth } from "@/app/contexts/AuthContext";

type SignInProps = {
  setIsSignOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignIn({setIsSignOpen}:SignInProps) {

    const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setIsSignOpen(false);
    } catch (err) {
      setError("Invalid email or password");
    }
  };


    return (
        <>
        <style jsx global>{`
        .modal-overlay {position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;}
        .modal {width: 480px; height: 420px; background: #f3f3f3; padding: 32px;position: relative}
        .cls-btn {position: absolute; top: 10px; right: 10px; cursor: pointer;}
        .field {width: 100%; margin: 12px 6px; padding: 5px; display: flex; flex-direction: column;}
        .field label {font-size: 14px; margin-bottom: 5px;}
        .field input{padding: 12px 6px; border: 1px solid #000; border-radius: 5px;}
        .login {width: 100%; margin: 12px 6px; padding: 12px 6px;border: 1px solid #000; border-radius: 5px; background-color: var(--blue); color: var(--white); font-size: 18px;}
        `}</style>
        <div className="modal-overlay" >
            <div className="modal">
                <span className="cls-btn" onClick={()=>setIsSignOpen(false)}>X</span>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <div className="field">
                    <label htmlFor="username">Username or Email Address</label>
                    <input type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmit} className="login">Log In</button>
            </div>
        </div>
        </>
    );
}