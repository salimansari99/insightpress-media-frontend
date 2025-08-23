


export default function MoreCard() {
    return (
        <>
        <style jsx>{`
        .mr-card-container {display: flex; justify-content: space-between; height: 80px; gap: 20px; }
        .mr-card-container:hover img {transform: scale(1.05);}
        .mr-left{width: 80px; height: 100%;overflow:hidden;border-radius: 3px;}
        .mr-left img {width: 100%; height: 100%; transform: scale(1); transition: transform 1s ease;}
        .mr-right {flex: 1; }
        .mr-ttl {font-size: 18px; font-weight: 500;}
        .dt {font-size: 14px; color: rgba(0,0,0, 0.5)}
        `}</style>
        <div className="mr-card-container">
            <div className="mr-left">
                <img src="/images/c1.webp" alt="" />
            </div>
            <div className="mr-right">
                <h3 className="mr-ttl">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                <p className="dt">NOV 14, 2023</p>
            </div>
        </div>
        </>
    );
}