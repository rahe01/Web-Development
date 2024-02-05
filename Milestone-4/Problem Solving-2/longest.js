const heigst = [2,23,43,43,43,23,2,12323,23,434343,4,213,132,3434,34];

function getMax(num1){
    let max = num1[0];
    for(const num of num1){
        
      if (num < max){
        max = num;
      }
    }

    return max;
}
console.log(
    getMax(heigst))