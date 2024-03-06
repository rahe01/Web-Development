const product = [
  {
    name: "laptop",
    price: 1222,
    brand: "Hp",
    color: "silver",
  },
  {
    name: "phone",
    price: 1222,
    brand: "realme",
    color: "silver",
  },
  {
    name: "watch",
    price: 12223333,
    brand: "rolax",
    color: "silver",
  },
  {
    name: "light",
    price: 1222,
    brand: "apple",
    color: "silver",
  },




];


// const brands = product.map(prodectt =>prodectt.brand);

// console.log(brands);

// const price = product.map(prodectt =>prodectt.price)

// console.log(price);

// product.forEach(product => console.log(product.color));

// const cheap = product.filter(product => product.price <=5090);

// console.log(cheap);


const includ = product.find(product =>product.name.includes('h'))

console.log(includ);