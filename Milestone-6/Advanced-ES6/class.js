const product = [
    { id: 1, name: "lenevo", price: 40500 },
    { id: 2, name: "dell", price: 40070 },
    { id: 3, name: "hp", price: 40060 },
    { id: 4, name: "mac", price: 40070 },
  ];

  
  class Product{
    country = "US";
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
  }

  const len = new Product();
  console.log(len);

  len.speak("aba kita kow")