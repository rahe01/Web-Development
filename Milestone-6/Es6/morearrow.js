const student ={
    name: 'John',
    age: 30,
    job: 'Developer'
}

const a = (person) => person.age;

console.log(a(student));


const getPi = () => Math.PI;
console.log(getPi());


const doMath = (x,y,z) => {
    const multiplier = x*y*z;
    const divi = x/y/z;
    const result = multiplier +divi;
    return result;
}

console.log(doMath(2,2,2));