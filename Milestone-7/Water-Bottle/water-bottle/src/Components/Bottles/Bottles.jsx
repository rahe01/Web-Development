import { useEffect, useState } from "react";
import Bottle from "./../Bottle/Bottle";

import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLS } from "../../utilites/localStorage";
import Cart from './../Cart/Cart';

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

    setCart(saveCart)


}

  } ,[bottles])



  const handleAddToCart = (bottle) => {
    console.log(bottle);

    const newCart = [...cart , bottle]
    setCart(newCart);

    addToLS(bottle.id)




  };







  const handleRemoveFromCart = (id) => {

 
const remainingCart = cart.filter( (cart) => cart.id !== id)

setCart(remainingCart)



    removeFromLS(id)





  }














  return (
    <div>
      <h3>Bottles Here {bottles.length}</h3>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

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
