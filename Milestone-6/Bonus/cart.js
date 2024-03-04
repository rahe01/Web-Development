const addProduct = () => {
  const productField = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = productQuantity.value;
  productField.value = "";
  productQuantity.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
  saveToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.textContent = `${product} : ${quantity}`;

  ul.appendChild(li);
};

const getStoredShopingCart = () => {
    let cart = {};
  const storedCart = localStorage.getItem('cart');
  
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;

};

const saveToLocalStorage = (product, quantity) => {

    const cart = getStoredShopingCart();
    cart[product] = quantity;
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);


};


const displayCart = () =>{
    const saveCart = getStoredShopingCart();
    console.log(saveCart)
    for(const product in saveCart) {
        const quantity = saveCart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}

displayCart();