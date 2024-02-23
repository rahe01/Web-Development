const number = [1, 2, 3, 4];

function add(a) {
  return a*2;
}

const returnValue  = number.map(add);

console.log(returnValue);


const num2 = [1, 2, 3, 4];

 const res = num2.map(num = a => a+2)
 console.log(res);