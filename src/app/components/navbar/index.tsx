"use client";
import React, { useState } from "react";
import User from "@/app/components/icons/user";
import SignIn from "../modals/signin";
import Subscribe from "../modals/subscribe";

export default function Navbar() {
    const [isSignOpen, setIsSignOpen] = useState(false);
    const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

    const openSignModal = ()=> {
        setIsSignOpen(!isSignOpen);
    }
    const openSubscribeModal = ()=> {
        setIsSubscribeOpen(!isSubscribeOpen);
    }


    return (
        <>
        <style jsx>{`
        .nav-container {display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #000; position: relative;height: 90px;}
        .nav-left, .nav-right {display: flex; gap: 25px;}
        .nav-mid {position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;}
        .theme-ic {width: 24px; height: 24px;cursor: pointer;}
        .user-ic {display: inline-block;width: 14px; height: 14px; margin-right: 8px;}
        .hmbrgr {display: flex; flex-direction: column; justify-content: center; cursor: pointer;}
        .line {height: 3px; margin-bottom: 5px; background-color: #000; transition: width 1s ease; border-radius: 5px;}
        
        .line:nth-child(1) {width: 14px;}
        .line:nth-child(2) {width: 24px; }
        .line:nth-child(3) {width: 18px; }
        .hmbrgr:hover .line {width: 24px; background-color: var(--blue); }
        
        .sign-lnk {display: flex; justify-content: center; align-items: center; padding: 10px 25px 10px 0; border-radius: 5px; font-size: 18px;  font-weight: 500;}
        .sign-lnk:hover {color: var(--blue);}
        .subscribe-btn{background: #000; color: #fff; padding: 10px 25px; border-radius: 5px; font-size: 18px;  font-weight: 500;}
        .comp-name {font-size: 42px; font-weight: 500;}
        .tagline {font-size: 18px;  font-weight: 500; text-align: center;}
        `}</style>
        {isSignOpen && <SignIn />}
        {isSubscribeOpen && <Subscribe />}
        <header className="nav-container">

            <div className="nav-left">
                <div className="hmbrgr">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="theme-container">
                    <img src="/images/night-mode.png" alt="" className="theme-ic" />
                </div>
            </div>
            <div className="nav-mid">
                <h1 className="comp-name">Insight Press</h1>
                <p className="tagline">All voices matter</p>
            </div>
            <div className="nav-right">
                <div className="sign-container">
                    <a className="sign-lnk" onClick={openSignModal}>
                        <span className="user-ic">
                            <User />
                        </span>
                        Sign In
                    </a>
                </div>
                <div className="subscribe-btn" onClick={openSubscribeModal}>
                    <a>Subscribe Now</a>
                </div>
            </div>

        </header>
        </>
    );
}