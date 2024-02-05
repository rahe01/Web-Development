
const name = ['abul', 'babul', 'abul'];

const number =[1,2,3,4,2,2,4,5,6,4,3];

function noDub(arr){
    const unique = [];

    for (const item of arr){
        if(unique.includes(item) ===false){
            unique.push(item);
        }
    }
    return unique;
}

console.log(noDub(name));