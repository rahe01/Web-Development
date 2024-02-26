const user = { id: 1, name: "Rahe", job: "devloper" };

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
  owner: "Alia",
  address: {
    street: "Kochu khet",
    city: "Mumbai",
    country: "India",
  },

  products: ['Laptop','Monitor','keyboard',],
  revenue: 500000,
  isOpen : true,
  isNew : false,
};

console.log(shop);

const shopJSON = JSON.stringify(shop);

console.log(shopJSON);

const shopOBJ = JSON.parse(shopJSON);

console.log(shopOBJ);
