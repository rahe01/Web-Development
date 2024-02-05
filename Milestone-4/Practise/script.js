function cubeNumber(number){
    const result = Math.pow(number,3);
    if(typeof number !== 'number'){
        return "Please provide a number";
    }

    
    
    return result;

   
}

console.log(cubeNumber("fdf"));

