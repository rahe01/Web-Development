
import './Cart.css'

const Cart = ({cart ,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart : {cart.length}</h4>

            


            <div className="cart-container">

                {
                    cart.map( bottle =>  <div> <img src={bottle.img}  key={bottle.id} />   <button key={bottle.id} onClick={ () => handleRemoveFromCart(bottle.id) }>Re</button></div> )
                }
            </div>









        </div>
    );
};

export default Cart;