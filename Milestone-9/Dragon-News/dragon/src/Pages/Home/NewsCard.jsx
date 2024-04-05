import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title ,image_url , details , _id} = news;
    return (
        <div className="card mb-14 border-b-2 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length> 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600">Read More</Link> </p> : <p>{details}</p>} 
         
        </div>
      </div>
    );
};

export default NewsCard;