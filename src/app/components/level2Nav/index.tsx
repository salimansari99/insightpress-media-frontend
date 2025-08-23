"use client";


export default function Level2Nav() {
    return (
    <>
    <style jsx>{`
    .l2-container {display: flex; justify-content: space-between; align-items: center;margin-block: 20px;}
    .search-box { display: flex;justify-content: flex-start; align-items: center; border: 1px solid #000; border-radius: 5px;}
    .search-ic {width: 100%; height: 42px;}
    .search-input {height: 42px;
    padding: 5px;outline: none;}
    .menus-list {display: flex; justify-content: flex-start; align-items: center;}
    .menu-item {position: relative;}
    
    .menu-lnk {font-size: 18px;padding: 18px 15px;position: relative;}
    .menu-lnk:hover {color: var(--blue);}
     .menu-lnk::after {content: "";
            background-color: var(--blue);
            position: absolute;
            width: 75%;
            height: 2px;
            bottom: 0;
            left: 50%;
            right: 0;
            transform: translateX(-50%) scaleX(0);
            transform-origin: center;
            transition: transform 0.5s ease-in-out;}
    .menu-lnk:hover::after {transform: translateX(-50%) scaleX(1);}

    `}</style>
    <div className="l2-container">
        <div className="search-box">
            <img src="/images/search-i.png" alt="" className="search-ic" />
            <input type="search" className="search-input" name="search" id="" placeholder="type something..." />
        </div>
        <div className="menus">
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