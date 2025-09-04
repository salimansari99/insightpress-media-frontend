"use client";


type Level2NavProps = {
  onClose: () => void; // parent controls closing
};

export default function Level2Nav({ onClose }: Level2NavProps) {


  return (
    <>
      <style jsx>{`
        .l2-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1091;
        }

        .l2-drawer {
          
          width: 280px;
          height: 100%;
          background: #fff;
          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
          
          padding: 20px;
          
        }

        .close-btn {
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          border: none;
          background: none;
          margin-bottom: 20px;
          position: absolute;
    left: 240px;
    top: 12px;
        }

        .menus-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 0;
          margin-top: 32px;
          list-style: none;
        }

        .menu-item {
          position: relative;
        }

        .menu-lnk {
          font-size: 18px;
          padding: 10px 5px;
          position: relative;
          display: inline-block;
        }

        .menu-lnk:hover {
          color: var(--blue);
        }

        .menu-lnk::after {
          content: "";
          background-color: var(--blue);
          position: absolute;
          width: 75%;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 0.5s ease-in-out;
        }

        .menu-lnk:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>

      {/* Overlay (click to close) */}
      <div className="l2-overlay" > 

      {/* Drawer */}
      <div className="l2-drawer">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <ul className="menus-list">
          <li className="menu-item">
            <a href="/" className="menu-lnk">Home</a>
          </li>
          <li className="menu-item">
            <a href="/category/culture" className="menu-lnk">Culture</a>
          </li>
          <li className="menu-item">
            <a href="/category/economy" className="menu-lnk">Economy</a>
          </li>
          <li className="menu-item">
            <a href="/category/politics" className="menu-lnk">Politics</a>
          </li>
          <li className="menu-item">
            <a href="/category/technology" className="menu-lnk">Technology</a>
          </li>
        </ul>
      </div>
      </div>
     
    </>
  );
}