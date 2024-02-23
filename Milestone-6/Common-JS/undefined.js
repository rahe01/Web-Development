/*

8 ways to get undified;
1. variable that is not initialized will give undefined
2. function with no return value .
3. parameter that is not passwd.
4. if return has nothing on the right side
5.properties that dosn't exist on an object 
6. accessing array element outside of the index.
7. deleting an element inside an array.
8. set a value derectly undefined



*/

let first;
console.log(first);

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));