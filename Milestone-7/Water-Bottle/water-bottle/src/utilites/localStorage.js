const getStoredCart = () => {
   const storedCartString =  localStorage.getItem('cart')

    if(storedCartString) {
        return JSON.parse(storedCartString)
    }
    return []

}


const setCartToLS = (cart) => {

    const cartStringfy =  JSON.stringify(cart)
    localStorage.setItem('cart' , cartStringfy)


}

const addToLS = (id) => {
    const storedCart = getStoredCart()
    storedCart.push(id)
    setCartToLS(storedCart)
   
}


const removeFromLS = (id) => {


    const cart = getStoredCart();

    const remaining = cart.filter( idx => idx !== id)

    setCartToLS(remaining)

}



export {addToLS ,getStoredCart ,removeFromLS}