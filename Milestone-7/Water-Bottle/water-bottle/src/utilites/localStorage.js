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

export {addToLS ,getStoredCart}