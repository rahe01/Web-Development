
 import './Bottle.css'


const Bottle = ({bottle , handleAddToCart}) => {
     
 console.log(bottle)

 const {name , img , price} = bottle



    return (
        <div className="bottle">
           <h3>Bottles: {name}</h3>
           <img src={img} alt="" /> 
           <p>${price}</p>
           <button onClick={ () => handleAddToCart (bottle)}>Purseace</button>
        </div>
    );
};

export default Bottle;