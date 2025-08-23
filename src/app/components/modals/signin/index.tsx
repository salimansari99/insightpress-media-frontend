

export default function SignIn() {

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
        .modal {width: 480px; height: 420px; background: #f3f3f3; padding: 32px;}
        .field {width: 100%; margin: 12px 6px; padding: 5px; display: flex; flex-direction: column;}
        .field label {font-size: 14px; margin-bottom: 5px;}
        .field input{padding: 12px 6px; border: 1px solid #000; border-radius: 5px;}
        .login {width: 100%; margin: 12px 6px; padding: 12px 6px;border: 1px solid #000; border-radius: 5px; background-color: var(--blue); color: var(--white); font-size: 18px;}
        `}</style>
        <div className="modal-overlay">
            <div className="modal">
                <div className="field">
                    <label htmlFor="username">Username or Email Address</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button className="login">Log In</button>
            </div>
        </div>
        </>
    );
}