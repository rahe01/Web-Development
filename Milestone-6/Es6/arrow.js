// Function declarations

function add(a,b){
    return a+b;
}

// function expressions
const add2 = function(a,b){
    return a+b;
}

console.log(add(2,3));


// arrow functions

const add3 = (a,b) => a+b;

console.log(add3(3,4));