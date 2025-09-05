"use client";
import Link from "next/link";
import React, { useState } from "react";
import UserIcon from "@/app/components/icons/user"; // ✅ renamed to avoid clash
import SignIn from "../modals/signin";
import SignUp from "../modals/signup";
import Subscribe from "../modals/subscribe";
import { useAuth } from "@/app/contexts/AuthContext";
import Level2Nav from "../level2Nav";

export default function Navbar() {
  const { user, token, signOut } = useAuth();
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isLevel2Open, setIsLevel2Open] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const openSignModal = () => {
    setIsSignOpen(!isSignOpen);
  };

  const openSubscribeModal = () => {
    setIsSubscribeOpen(!isSubscribeOpen);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {isSignOpen && <SignIn setIsSignOpen={setIsSignOpen} setIsSignUpOpen={setIsSignUpOpen} />}
      {isSignUpOpen && <SignUp setIsSignUpOpen={setIsSignUpOpen} setIsSignOpen={setIsSignOpen} />}
      {isSubscribeOpen && (
        <Subscribe setIsSubscribeOpen={setIsSubscribeOpen} />
      )}
      {isLevel2Open && <Level2Nav onClose={() => setIsLevel2Open(false)}/>}

      <header className="nav-container">
        <div className="nav-left">
          <div className="hmbrgr" onClick={()=> setIsLevel2Open(true)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          {/* <div className="theme-container">
            <img src="/images/night-mode.png" alt="Theme toggle" className="theme-ic" />
          </div> */}
        </div>
        

        <div className="nav-mid">
          <Link href="/">
          <h1 className="comp-name">Insight Press</h1>
          <p className="tagline">All voices matter</p>
          </Link>
          
        </div>

        <div className="nav-right">
          {token ? (
            <div className="sign-lnk">
              <span className="user-ic">
                <UserIcon />
              </span>
              {`Hi, ${user?.username}`}
              <div className="user-info">
                <h4 className="us-nm">{user?.username}</h4>
                <p className="us-em">{user?.email}</p>
                <button onClick={handleLogout} className="bt-out">
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="sign-container">
              <button className="sign-lnk" onClick={openSignModal}>
                <span className="user-ic">
                  <UserIcon />
                </span>
                Sign In
              </button>
            </div>
          )}

          {/* <button className="subscribe-btn" onClick={openSubscribeModal}>
            Subscribe Now
          </button> */}
        </div>
      </header>

      <style jsx>{`
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #000;
          position: relative;
          height: 90px;
        }
        .nav-left,
        .nav-right {
          display: flex;
          gap: 25px;
        }
        .nav-mid {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }
        .theme-ic {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
        .user-ic {
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-right: 8px;
        }
        .hmbrgr {
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
        }
        .line {
          height: 3px;
          margin-bottom: 5px;
          background-color: #000;
          transition: width 0.3s ease;
          border-radius: 5px;
        }
        .line:nth-child(1) {
          width: 14px;
        }
        .line:nth-child(2) {
          width: 24px;
        }
        .line:nth-child(3) {
          width: 18px;
        }
        .hmbrgr:hover .line {
          width: 24px;
          background-color: var(--blue);
        }
        .sign-lnk {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 25px 10px 0;
          border-radius: 5px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          background: none;
          border: none;
        }
        .sign-lnk:hover {
          color: var(--blue);
        }
        .user-info {
          position: absolute;
          display: none;
          width: 215;
          top: 40px;
          right: 0;
          background: #fff;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 8px;
          z-index: 10;
        }
        .us-nm, .us-em {
          border-bottom: 1px solid;
          margin-bottom: 5px;
        }
        .sign-lnk:hover .user-info {
          display: block;
        }
        .subscribe-btn {
          background: #000;
          color: #fff;
          padding: 10px 25px;
          border-radius: 5px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }
        .comp-name {
          font-size: 42px;
          font-weight: 500;
        }
        .tagline {
          font-size: 18px;
          font-weight: 500;
          text-align: center;
        }
          @media (max-width: 768px) {
          .nav-container {justify-content: end;
    padding: 20px;}
          .comp-name {font-size: 24px;}
          .tagline {font-size: 14px;}
          .nav-mid {left: 86px;}
          .nav-right {display: none;}
          }
      `}</style>
    </>
  );
}