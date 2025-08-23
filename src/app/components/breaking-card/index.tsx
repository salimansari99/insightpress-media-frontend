
type CardProps = {
  width?: number;
  imgHeight?: number;
  image: string;
  tag?: string;
  title: string;
  description?: string;
  className?: string;
};

const BreakingCard: React.FC<CardProps> = ({
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
        .breaking-container {position: relative; overflow: hidden;aspect-ratio: 2/2;} 
        .breaking-container:hover img {transform: scale(1.05);}
        .br-img {width: 100%; height: 100%;transform: scale(1); transition: transform 1s ease;border-radius: 3px; }
        .br-tg{position: absolute;top: 20px; left: 20px; color: #fff; font-size: 16px;background-color: var(--orange); padding: 10px; border-radius: 3px;}
        .br-content {position: absolute; bottom: 20px; padding: 20px;}
        
        .ar-tg {background-color: var(--black);color: #fff;font-size: 16px; padding: 5px 10px; border-radius: 3px;}
        .ar-ttl {margin-block: 20px;font-size: 20px;}
        .published-dt {font-size: 14px;}
        
        `}</style>
        <div className="breaking-container">
            {/* <div className="img-conatainer"> */}
 <img src="/images/t2.webp" alt="" className="br-img" />
 <span className="br-tg">BREAKING</span>
 <div className="br-content">
<span className="ar-tg">TECHNOLOGY</span>
 <p className="ar-ttl">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
 <p className="published-dt">NOV 14, 2023</p>
 </div>
 
            {/* </div> */}
           

        </div>
        </>
    );
}

export default BreakingCard;