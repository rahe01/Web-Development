import { useEffect, useState } from "react";
import Bottle from "./../Bottle/Bottle";

import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    console.log(bottle);

    const newCart = [...cart , bottle]
    setCart(newCart);




  };

  return (
    <div>
      <h3>Bottles Here {bottles.length}</h3>
      <h4>Cart : {cart.length}</h4>

      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          >
            {" "}
          </Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
