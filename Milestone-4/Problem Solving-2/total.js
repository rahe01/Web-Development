const product = [
    {name : "ciruni", prise:100 ,qu:2},
    {name : "ciruni", prise:100 ,qu:3},
    {name : "ciruni", prise:100, qu:1},
]

function total(enter){
    
let sum =0


    for(const to of enter){

        sum=sum+ (to.prise*to.qu);
        

    }
    return sum;
}

console.log(total(product))