// const data = [
//   {
//     name: "abul",
//     id: 1,
//     address: "kochu khet",
//   },
// ];

// const result = data[0].name;

// console.log(result);

const products = {
  count: 5000,
  data: [
    {
      id: 1,
      name: "HP",
      price: 35000,
    },

    {
      id: 2,
      name: "Dell",
      price: 40000,
    },
  ],
};

console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "Raj",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    street: {
      first: "uttara",
      second: "path",
      third: "pune",
    },
  },
};

const user2 = {
  id: 5002,
  name: "Raj",
  address: {
    city: "Bangalore",
  },
};

console.log(user.address?.street?.third);

console.log(user2.address.street?.third);
