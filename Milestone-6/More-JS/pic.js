const reverseString = str =>
{
const re = str.split('').reverse().join('');
return re;
}   

console.log(reverseString('hello'));


