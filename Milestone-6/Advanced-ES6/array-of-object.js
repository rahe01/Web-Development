const product = [
  { id: 1, name: "lenevo", price: 40500 },
  { id: 2, name: "dell", price: 40070 },
  { id: 3, name: "hp", price: 40060 },
  { id: 4, name: "mac", price: 40070 },
];

product.forEach(element => console.log(element.id))

const name = product.map(pro => pro.name);


const filter = product.filter(element => element.price > 30400);

const find = product.find(element => element.price  >4000 );


const reduce = product.reduce((acum ,cur )=> acum + cur.price, 0);
console.log(reduce)