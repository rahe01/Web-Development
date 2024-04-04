import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2>All Categories</h2>
      {
        categories.map((category) => (
          <Link to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold " key={category.id}>
            <h3>{category.name}</h3>
           
          </Link>
        ))
      }
    </div>
  );
};

export default LeftSide;
