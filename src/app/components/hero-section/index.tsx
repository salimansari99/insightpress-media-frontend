import MoreCard from "../more-card";
import Card from "../card";

export default function HeroSection() {
  return (
    <>
      <style jsx>{`
        .hero-section {
          display: flex;
          justify-content: space-between;
          margin-block: 80px;
          // background: url('/images/home-hero-image.webp') no-repeat fixed;
        }

        .h-l {
          width: 60%;
        }

        .h-r {
          width: 40%;
        }

        

        .l-top {
        width: 90%;
          margin-bottom: 24px;
        }

        .tg {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 4px 10px;
          font-size: 14px;
          border-radius: 3px;
          margin-bottom: 8px;
        }

        .heading {
          font-size: 40px;
          margin: 10px 0;
        }

        .desc {
          font-size: 18px;
          color: #555;
        }

        .ttl {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .trending-cards {
        width: 75%;
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
        }

        .trending-cards::-webkit-scrollbar {
          display: none; /* Hide scrollbar */
        }

        .trending-cards > * {
          flex: 0 0 auto;
          scroll-snap-align: start;
        }

        .br-cards {
        width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 540px;
          overflow: auto;
        }

        @media (max-width: 768px) {
        .l-top {width: 100%;}
        .hero-section {
        flex-direction: column;
        }
        .h-l, .h-r {width: 100%;}
        .trending-cards {width: 100%; flex-direction: column;}
        }
      `}</style>

      <section className="hero-section">
        <div className="h-l">
          <div className="l-top">
            <span className="tg">HOT</span>
            <h1 className="heading">
              Bulvinar Neque Laoreet Suspendisse Interdum
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              expedita optio eveniet dolor sit amet, consectetur adipisicing elit. Nesciunt
              expedita optio eveniet?
            </p>
          </div>
          <div className="l-btm">
            <h3 className="ttl">TRENDING NOW</h3>
            <div className="trending-cards">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <Card
                    key={i}
                    width={30}
                    // imgHeight={180}
                    image="/images/t1.webp"
                    title="Trip to the Mountains  Lorem ipsum dolor sit amet consectetur adipisicing."
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="h-r">
          <h3 className="ttl">Popular Posts</h3>
          <div className="br-cards">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <MoreCard key={i} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}