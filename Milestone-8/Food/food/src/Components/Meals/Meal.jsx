import { Link } from "react-router-dom";

const Meal = ({ item }) => {
  const { name , email , id  } = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="
            https://i.ibb.co/WKQ3Jm6/pexels-cottonbro-studio-3298633.jpg
            "
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <div className="card-actions justify-end">
        <Link to={`/meal/${id}`}><button className="btn btn-primary">Show Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
