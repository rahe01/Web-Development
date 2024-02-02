// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];



// for (let i = colors.length -1 ; i>=0 ; i--){
//     console.log(colors[i]);
// }

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// for(let i =0 ; i< numbers.length ; i++){

//     if(numbers[i] %2 ===0){
//         console.log(numbers[i]);
//     }

  
// }

// for(let i of numbers){
//    if(i %2 ===0){
//     console.log(i);
//    }
    
// }


// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'


// var names = ['Tom', 'Tim', 'Tin', 'Tik'];
// var concatenatedString = '';

// for (let name of names) {
//     concatenatedString += name;
// }

// console.log(concatenatedString);


const statement = 'I am a hard working person';

// Split the sentence into an array of words
const wordsArray = statement.split(' ');

// Reverse the array
const reversedWordsArray = wordsArray.reverse();

// Join the reversed words into a sentence
const reversedStatement = reversedWordsArray.join(' ');

console.log(reversedStatement);

