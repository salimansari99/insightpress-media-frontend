import React from "react";

type CardProps = {
  width?: number;
  image: string;
  tag?: string;
  title: string;
  description?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  width = 310,
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
          max-width: ${width}%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          background: #f3f3f3;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .card-container:hover {
          transform: translateY(-4px);
        }

        .card-top {
          width: 100%;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card-top:hover .card-img {
          transform: scale(1.05);
        }

        .tag {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(0, 0, 0, 0.7);
          padding: 5px 12px;
          font-size: 0.85rem;
          border-radius: 5px;
          color: white;
        }

        .card-bottom {
          padding: 12px 14px;
        }

        .headline {
          color: #000;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 10px 0 6px 0;
          line-height: 1.3;
        }

        .desc {
          color: #333;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        /* Tablet adjustments */
        @media (max-width: 1024px) {
          .card-container {
            max-width: 90%;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .card-container {
            max-width: 100%;
            border-radius: 6px;
          }

          .headline {
            font-size: 1rem;
          }

          .desc {
            font-size: 0.85rem;
          }

          .tag {
            font-size: 0.75rem;
            padding: 4px 8px;
          }
        }

        /* Small mobile screens */
        @media (max-width: 480px) {
          .headline {
            font-size: 0.95rem;
          }

          .desc {
            font-size: 0.8rem;
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
          {description && <p className="desc">{description}</p>}
        </div>
      </div>
    </>
  );
};

export default Card;