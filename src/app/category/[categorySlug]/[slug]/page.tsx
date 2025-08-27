"use client";
import MoreCard from "@/app/components/more-card";
import BreakingCard from "@/app/components/breaking-card";
export default function ArticleConsumption() {
    return (
        <>
        <style jsx>{`
        .article-detail-container {display: flex; gap: 20px; margin-bottom: 60px;}
        .article-left {width: 65%;}
        .article-right {width: 35%;position: sticky;
          top: 20px;align-self: flex-start;
          height: fit-content;}
        .heading {font-size: 38px; margin-block: 20px;}
        .desc p{margin-bottom: 12px;}
        .br-card {margin-bottom: 20px;}
        @media (max-width: 768px) {
        .article-detail-container {flex-direction: column;}
        .article-left, .article-right {width: 100%; padding: 20px;}
        }
        `}</style>
        <section className="article-detail-container">
            <div className="article-left">
            <h1 className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim?</h1>
            <div className="desc">
                <p className="">Proin sed libero enim sed faucibus turpis in. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Dolor morbi non arcu risus quis varius. Habitasse platea dictumst vestibulum rhoncus est. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Lobortis elementum nibh tellus molestie nunc non blandit. Elementum nibh tellus molestie nunc non blandit massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Duis at consectetur lorem donec massa sapien faucibus et. Vitae et leo duis ut diam. Egestas pretium aenean pharetra magna. Amet massa vitae tortor condimentum lacinia quis vel.</p>
                <p className="">Proin sed libero enim sed faucibus turpis in. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Dolor morbi non arcu risus quis varius. Habitasse platea dictumst vestibulum rhoncus est. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Lobortis elementum nibh tellus molestie nunc non blandit. Elementum nibh tellus molestie nunc non blandit massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Duis at consectetur lorem donec massa sapien faucibus et. Vitae et leo duis ut diam. Egestas pretium aenean pharetra magna. Amet massa vitae tortor condimentum lacinia quis vel.</p>
                <p className="">Proin sed libero enim sed faucibus turpis in. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Dolor morbi non arcu risus quis varius. Habitasse platea dictumst vestibulum rhoncus est. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Lobortis elementum nibh tellus molestie nunc non blandit. Elementum nibh tellus molestie nunc non blandit massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Duis at consectetur lorem donec massa sapien faucibus et. Vitae et leo duis ut diam. Egestas pretium aenean pharetra magna. Amet massa vitae tortor condimentum lacinia quis vel.</p>
                <p className="">Proin sed libero enim sed faucibus turpis in. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Dolor morbi non arcu risus quis varius. Habitasse platea dictumst vestibulum rhoncus est. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Lobortis elementum nibh tellus molestie nunc non blandit. Elementum nibh tellus molestie nunc non blandit massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Duis at consectetur lorem donec massa sapien faucibus et. Vitae et leo duis ut diam. Egestas pretium aenean pharetra magna. Amet massa vitae tortor condimentum lacinia quis vel.</p>
                <p className="">Proin sed libero enim sed faucibus turpis in. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Dolor morbi non arcu risus quis varius. Habitasse platea dictumst vestibulum rhoncus est. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Lobortis elementum nibh tellus molestie nunc non blandit. Elementum nibh tellus molestie nunc non blandit massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Duis at consectetur lorem donec massa sapien faucibus et. Vitae et leo duis ut diam. Egestas pretium aenean pharetra magna. Amet massa vitae tortor condimentum lacinia quis vel.</p>
                <p className="">Proin sed libero enim sed faucibus turpis in. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Dolor morbi non arcu risus quis varius. Habitasse platea dictumst vestibulum rhoncus est. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Lobortis elementum nibh tellus molestie nunc non blandit. Elementum nibh tellus molestie nunc non blandit massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Duis at consectetur lorem donec massa sapien faucibus et. Vitae et leo duis ut diam. Egestas pretium aenean pharetra magna. Amet massa vitae tortor condimentum lacinia quis vel.</p>
            </div>
            </div>
            <div className="article-right">
                <div className="br-card">
                    <BreakingCard 
                width={300}
              imgHeight={180}
              image="/images/t1.webp"
              tag="Travel"
              title="Trip to the Mountains"
              description="Explore the scenic views and unwind in nature."
                />      
                </div>
                <div className="mr-crd">
                    <h3 className="ttl">Popular Now</h3>
<MoreCard />
                <MoreCard />
                <MoreCard />
                <MoreCard />
                <MoreCard />
                </div>
                
                
            </div>
        </section>
        </>
    );
}