"use client";
import CategoryCard from "@/app/components/category-card";
import BreakingCard from "@/app/components/breaking-card";
import MoreCard from "@/app/components/more-card";

export default function CategoryListingPage() {
  return (
    <>
      <style jsx>{`
        .category-listing-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin: 40px 0 60px 0;
        }
        .cat-left {
          width: 70%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
        }
        .cat-right {
          width: 30%;
          position: sticky;
          top: 0;
          align-self: flex-start;
          height: fit-content;
        }
          .mr-cards-container {display: flex; flex-direction: column; justify-content: flex-start; gap: 15px;}
          @media (max-width: 768px) {
          .category-listing-container {flex-direction: column; padding: 3px;}
          .cat-left, .cat-right {width: 100%;}
          }
      `}</style>
      <div className="category-listing-container">
        <div className="cat-left">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <div className="cat-right">
          <BreakingCard
            width={300}
            // imgHeight={180}
            image="/images/t1.webp"
            tag="Travel"
            title="Trip to the Mountains"
            description="Explore the scenic views and unwind in nature."
          />
          <div className="mr-card">
            <h3 className="ttl">Popular Posts</h3>
            <div className="mr-cards-container">
              <MoreCard />
              <MoreCard />
              <MoreCard />
              <MoreCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
