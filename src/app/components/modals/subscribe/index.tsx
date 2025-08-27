import React from "react";

type SubscribeProps = {
  setIsSubscribeOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Subscribe({setIsSubscribeOpen}:SubscribeProps) {
    return (
        <>
        <style jsx global>{`
        .subscribe-overlay {position: fixed; top: 0; left: 0; width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;}
        .subscribe-modal {width: 60%; height: 75%; background: #f3f3f3; padding: 32px; display: flex;align-items: stretch; /* make left/right fill full height */
          gap: 24px; /* space between left and right */
          border-radius: 8px;
          overflow: hidden;}
        .left, .right {flex: 1;}
        .left img {width: 100%; height: 100%; object-fit: cover;}
        .right {display: flex;
          flex-direction: column;
          justify-content: center;position: relative;}
          .cls-btn {font-size: 24px;position: absolute; top: -20px; right: -10px;cursor: pointer;}
        .field {width: 100%; margin: 12px 6px; padding: 5px; display: flex; flex-direction: column;}
        .field label {font-size: 14px; margin-bottom: 5px;}
        .field input{padding: 12px 6px; border: 1px solid #000; border-radius: 5px;}
        .login {width: 100%; margin: 12px 6px; padding: 12px 6px;border: 1px solid #000; border-radius: 5px; background-color: var(--blue); color: var(--white); font-size: 18px;}
        `}</style>
        <div className="subscribe-overlay">
            
            <div className="subscribe-modal">
                <div className="left">
                    <img src="/images/subscribe-img.webp" alt="" />
                </div>
                <div className="right">
                    <span className="cls-btn" onClick={()=> setIsSubscribeOpen(false)}>X</span>
                    <h3 className="ttl">Newsletter Subscribe</h3>
                    <p className="desc">Enter your email address below and subscribe to our newsletter</p>
                    <div className="field">
                    <label htmlFor="username">Your Name</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="field">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <button className="login">Subscribe</button>
                </div>
            </div>
        </div>
        </>
    );
}