"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

const Meals = () => {
  const [search, setSearch] = useState(""); // Input value
  const [meals, setMeals] = useState([]); // Meal data from API
  const [loading, setLoading] = useState(false); // Loading state

  const fetchMeals = async () => {
    try {
      setLoading(true); // Start loading
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      const data = await res.json();
      setMeals(data.meals || []); // Set meals or empty array if no data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (search) {
      fetchMeals();
    }
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value); // Update search state on input change
  };

  return (
    <div>
      <input onChange={handleInputChange} type="text" placeholder="Search meals by first letter..." />
      <button onClick={fetchMeals}>Search</button>

      {loading && <p>Loading...</p>} {/* Show loading state */}

      {meals && meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              <li>{meal.strMeal}</li>
              <Image 
                src={meal.strMealThumb} 
                alt={meal.strMeal} // Always include alt attribute
                width={500} 
                height={500} 
              />
            </div>
          ))}
        </ul>
      ) : (
        !loading && search && <p>No meals found.</p>
      )}
    </div>
  );
};

export default Meals;
