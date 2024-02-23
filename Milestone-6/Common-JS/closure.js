function kitchen(){
    let rost = 0;
    return function(){
        rost++;
        return rost;
    }
}

const kitchen1 = kitchen();

console.log(kitchen1());
console.log(kitchen1());
console.log(kitchen1());
console.log(kitchen1());
console.log(kitchen1());