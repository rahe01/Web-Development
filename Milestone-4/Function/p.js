// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// function mul(a,b,c,d){
//     const result = a*b*c*d;
//     return result;

// }

// const a = mul(2,2,2,2);
// console.log(a);



// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function calculation(a){
//     if( a %2 !==0){
//         const mul = a*2;
//         return mul;
//     }

//     else{
//         const divide = a/2;
//         return divide;
//     }

// }

// const result = calculation(13);

// console.log(`The result is ${result}`);


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(a){
    
//     let sum =0;
//     for(const value of a){
//         sum = value +sum; 
//     }
//     let avg = sum / a.length;

//     return avg;


// }

// const b= make_avg([10,23,4,45,454,23]);
// console.log(`The value of average is ${b}`);


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(str){

//     let zero =0;

//     for(let i = 0; i<str.length; i++){
//         if(str[i] === "0"){
//             zero ++;
//         }
//     }

//     return zero;
// }

// const zeroIs = count_zero("001100010101010101");
// console.log(zeroIs);

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(a){
    if(a %2 ===0){
        const result = 'Even';
        return result;
    }

    else{
        const result = 'Odd'
        return result;
    }
}

console.log(odd_even(6))