function add(num1, num2=0) {
    const num = num1 + num2;
    console.log(num1, num2,num);
    return num;
}

add(2);

function name(first,last=''){
    const na = first + ' '+ last;
    return na;
}