"use client";

export default function CategoryCard() {
    return (
        <>
        <style jsx>{`
        .categorycard-container {width: 430px; padding: 20px; background: #f3f3f3;}
        .brdcrmb {font-size: 16px;}
        .card-ttl {font-size: 24px; font-weight: 500;}
        .card-img {width: 100%; height: 320px; overflow: hidden;}
        .card-img img {width: 100%; height: 100%; transform: scale(1); transition: transform 1s ease;}
        .categorycard-container:hover img{transform: scale(1.05);}
        .card-desc {font-size: 18px;margin-block:20px;}

        .auhtor-dt {display: flex;justify-content: flex-start; align-items: center;gap: 10px}
        .auth-detail {font-size: 14px; font-weight: 500;display: flex; justify-content: flex-start; align-items: center;
    gap: 10px; position: relative;}
    .auth-detail::after {content: "/";}
    .auth-detail span:hover {color: var(--blue);}
        .auth-img {width: 28px; height: 28px; border-radius: 100%;}
        .p-dt {font-size: 14px;}

        `}</style>
        <div className="categorycard-container">
            <p className="brdcrmb">IN SCIENCE / READ TIME3 MINS</p>
            <a href="culture/turpis-egestas-sed-tempus">
            <h3 className="card-ttl">Turpis Egestas Sed Tempus Urna Pharetra</h3>
            <div className="card-img">
                <img src="/images/s1.webp" alt="" />
            </div>
            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque. A diam maecenas sed enim ut. Orci phasellus egestas tellus rutrum tellus pellentesque eu…</p>
            </a>
            <div className="auhtor-dt">
                <a href="/author/author-name" className="auth-detail"><img src="/images/author-image.webp" alt="" className="auth-img" />BY <span>AUTHOR NAME</span></a>
                <p className="p-dt">ON NOV 14, 2023</p>
            </div>
            
        </div>
        </>
    );
}