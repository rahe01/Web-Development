import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
  const meal = useLoaderData();

  console.log(meal);

  return (
    <div className="w-11/12 mx-auto">
      <h1>Chef : {meal.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {meal.map((item, idx) => (
          <Meal key={idx} item={item}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
