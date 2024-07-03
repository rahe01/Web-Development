
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, urlToImage, description,  publishedAt} = news;
  const id = publishedAt
  console.log(id)

  return (
    <div className="card mb-14 border-b-2 bg-base-100 shadow-xl">
      <figure>
        <img src={urlToImage} alt="News" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>


        <Link to={`/news/${id}`}>
        <button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  );
};

export default NewsCard;
