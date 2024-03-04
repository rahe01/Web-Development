const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(JSON.stringify(person));

console.log(localStorage.getItem("person"));

const setAge = () => {
  localStorage.setItem("person", "rahe");
};
