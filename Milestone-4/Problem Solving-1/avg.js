function avg(arr) {
  const odd =[];

  for (let i of arr) {

    if(i %2 ===1){
        odd.push(i);
        
    }
  }

  let sum =0;
  for(const number of odd){
    sum += number;
  }
  const count = odd.length;
  const avar = sum / count;
  return avar;

  
}

console.log(avg([1,2,3]))
