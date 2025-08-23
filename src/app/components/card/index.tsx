import React from "react";

type CardProps = {
  width?: number; // Optional, fallback width
  imgHeight?: number; // Optional, fallback height
  image: string;
  tag?: string;
  title: string;
  description?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  width = 310,
  imgHeight = 225,
  image,
  tag,
  title,
  description,
  className = "",
}) => {
  return (
    <>
      <style jsx>{`
        .card-container {
          width: 100%;
          max-width: ${width}px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          background: #f3f3f3;
          border-radius: 3px;
        }

        .card-top {
          width: 100%;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: hidden;
          border-radius: 3px;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card-img:hover {
          transform: scale(1.05);
        }

        .tag {
          position: absolute;
          bottom: 0;
          margin: 15px;
          background: #000;
          padding: 5px 10px;
          font-size: 14px;
          border-radius: 5px;
          color: white;
        }

        .card-bottom {
          padding: 10px;
        }

        .headline {
          color: #000;
          font-size: 1rem;
          font-weight: 700;
          margin: 12px 0 6px 0;
        }

        .desc {
          color: #000;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .card-container {
            max-width: 100%;
          }
        }
      `}</style>

      <div className={`card-container ${className}`}>
        <div className="card-top">
          <img src={image} alt={title} className="card-img" />
          {tag && <span className="tag">{tag}</span>}
        </div>
        <div className="card-bottom">
          <h3 className="headline">{title}</h3>
          <p className="desc">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;