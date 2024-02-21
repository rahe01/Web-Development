const max = Math.max(3,4,45,23,23,434);

const arra = [1,2,3,45,56,56,76];

const arrayMax = Math.max(...arra);
console.log(arrayMax);

// to copy spread operator

const nams = [2,3,4,5];
const nams2 = nams;
const nams3 = [...nams]

console.log(nams3);