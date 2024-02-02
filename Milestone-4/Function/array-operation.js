function arr(number){
    let summ =0
    for(const sum of number){
        summ = sum+summ;
    }
    return  summ;

}

const sumww=arr([1,2,3,4,5]);

console.log(sumww)