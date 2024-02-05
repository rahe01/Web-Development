function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }

    return num2;
}


const s1 = getMax(234,232);

const s2 = getMax(123,34342,);

const  ultimateMax = getMax(s1, s2);

console.log(ultimateMax)