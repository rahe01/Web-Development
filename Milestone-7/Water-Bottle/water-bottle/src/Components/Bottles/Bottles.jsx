import { useEffect, useState } from "react";
import Bottle from "./../Bottle/Bottle";

import "./Bottles.css";
import { addToLS, getStoredCart } from "../../utilites/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);



  useEffect( () =>{

  
if(bottles.length > 0){

    const stortedCart = getStoredCart();

    console.log(stortedCart ,bottles)

    const saveCart = []

    for (const id of stortedCart){
        console.log(id )

        const bottle = bottles.find((bottle) => bottle.id === id);

        if(bottle){

            saveCart.push(bottle)
        }
    }

    console.log(saveCart)


}

  } ,[bottles])



  const handleAddToCart = (bottle) => {
    console.log(bottle);

    const newCart = [...cart , bottle]
    setCart(newCart);

    addToLS(bottle.id)




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
