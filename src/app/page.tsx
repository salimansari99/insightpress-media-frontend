"use client";
import Card from "@/app/components/card";
import BreakingCard from "./components/breaking-card";
import MoreCard from "./components/more-card";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        .custom-card {
          border: 2px solid red;
          transition: box-shadow 0.3s ease;
        }
        .custom-card:hover {
          box-shadow: 0 4px 20px rgba(255, 0, 0, 0.5);
        }
        .br-news {
          display: flex;
          justify-content: space-between;
          
        }
        .br-l {
          width: 49%;
        }
        .br-r {
          width: 49%;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
        }
        .ed-choice {display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
          margin-block: 20px;}
          .ed-l {width: 75%}
          .ed-r {width: 25%}
          .worth-crd {margin-block: 10px;border-bottom: 1px solid #000; overflow: hidden;}
          .w-img {border-radius: 3px; transform: scale(1); transition: transform 1s ease; margin-bottom: 10px;}
          .worth-crd:hover .w-img{transform: scale(1.05);}
          .w-ttl {font-size: 18px; margin-bottom: 10px;}
          .dt-tg {font-size: 14px; margin-bottom: 10px;}

          .mixed-articles {display: flex; flex-direction: column;}
          .mixed-top {display: flex;gap: 20px;margin-bottom: 20px;}
          .ar-cat {font-size: 16px; font-weight: 700; margin-bottom: 10px; }
          .mixed-bottom {    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px}

      `}</style>
      <div className="main-container">
        {/* <Navbar />
        <Level2Nav /> */}
        <HeroSection />
        <section className="br-news">
          <div className="br-l">
            <h3 className="ttl">Breaking News</h3>
            <BreakingCard
              width={300}
              imgHeight={180}
              image="/images/t1.webp"
              tag="Travel"
              title="Trip to the Mountains"
              description="Explore the scenic views and unwind in nature."
            />
          </div>
          <div className="br-r">
            <h3 className="ttl">Popular Now</h3>
            <div className="cards">
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature.  Lorem ipsum dolor sit amet consectetur adipisicing. "
                
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature.  Lorem ipsum dolor sit amet consectetur adipisicing."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature.  Lorem ipsum dolor sit amet consectetur adipisicing."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
            </div>
          </div>
        </section>
        <section className="ed-choice">
          <div className="ed-l">
            <h3 className="ttl">Editor Choice</h3>
            <div className="cards">
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />

              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
              <Card
                width={300}
                imgHeight={180}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
          </div>
          </div>
          <div className="ed-r">
            <h3 className="ttl">Worth Reading</h3>
            <div className="worth-cards">
                <div className="worth-crd">
                  <img src="/images/p1.webp" alt="" className="w-img"/>
                  <a href="" className="lnk"><h4 className="w-ttl">Pellentesque Eliteget Bravida Cumsociis Natoque</h4></a>
                  <p className="dt-tg">Nov 10, 2023 / Travel, World</p>
                </div>
                <div className="worth-crd">
                  <a href="" className="lnk"><h4 className="w-ttl">Pellentesque Eliteget Bravida Cumsociis Natoque</h4></a>
                  <p className="dt-tg">Nov 10, 2023 / Travel, World</p>
                </div>
                <div className="worth-crd">
                  <a href="" className="lnk"><h4 className="w-ttl">Pellentesque Eliteget Bravida Cumsociis Natoque</h4></a>
                  <p className="dt-tg">Nov 10, 2023 / Travel, World</p>
                </div>
                <div className="worth-crd">
                  <a href="" className="lnk"><h4 className="w-ttl">Pellentesque Eliteget Bravida Cumsociis Natoque</h4></a>
                  <p className="dt-tg">Nov 10, 2023 / Travel, World</p>
                </div>
                <div className="worth-crd">
                  <a href="" className="lnk"><h4 className="w-ttl">Pellentesque Eliteget Bravida Cumsociis Natoque</h4></a>
                  <p className="dt-tg">Nov 10, 2023 / Travel, World</p>
                </div>
                <div className="worth-crd">
                  <a href="" className="lnk"><h4 className="w-ttl">Pellentesque Eliteget Bravida Cumsociis Natoque</h4></a>
                  <p className="dt-tg">Nov 10, 2023 / Travel, World</p>
                </div>
            </div>
            <div className="sc-form">

            </div>
          </div>

        </section>
        {/* <section className="mixed-articles">
          <div className="mixed-top">
            <div className="mixed-card">
            <h3 className="ar-cat">Editor Choice</h3>
            <div className="cards">
              <Card
                width={415}
                imgHeight={275}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
            </div>
            </div>
             <div className="mixed-card">
            <h3 className="ar-cat">Editor Choice</h3>
            <div className="cards">
              <Card
                width={415}
                imgHeight={275}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
            </div>
            </div>
             <div className="mixed-card">
            <h3 className="ar-cat">Editor Choice</h3>
            <div className="cards">
              <Card
                width={415}
                imgHeight={275}
                image="/images/t1.webp"
                tag="Travel"
                title="Trip to the Mountains"
                description="Explore the scenic views and unwind in nature."
              />
            </div>
            </div>
             
          </div>
          <div className="mixed-bottom">
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
            <MoreCard />
          </div>
        </section> */}
        
      </div>
      {/* <Footer /> */}
     
    </>
  );
}
