const me = {
    name: "Rahe",
    age: 19,
  };
  

//   const studentJson = JSON.stringify(me);
//   console.log(studentJson);
//   const s1 = JSON.parse(studentJson);
//   console.log(s1);

// const key = Object.keys(me);

// console.log(key);
// const value = Object.values(me);

// console.log(value);

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

  const newProduct =   {
    name: "i",
    price: 1222,
    brand: "apple",
    color: "silver",
  }

  const n = [...product, newProduct];
  console.log(n);

  console.log(product)