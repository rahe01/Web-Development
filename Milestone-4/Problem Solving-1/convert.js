function inchTofeet(inch){
    const feet= inch/12;
    const feetNumber = parseInt(feet);
    const feetFlot = inch %12;
   const result = `${feetNumber} feat ${feetFlot} inch`;
   return result;
}

console.log(inchTofeet(75));


function milesToKilo(miles){
    const result = miles*1.65656;
    return result;
}

console.log(milesToKilo(5))