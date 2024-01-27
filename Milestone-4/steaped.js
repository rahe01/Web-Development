const prise = 4000;

if(prise >= 5000){
    const disPrise = prise * 10 /100;
    const pay = prise -disPrise;
    console.log(disPrise);
    console.log(pay)
}

else if(prise >= 4000){
    const disPrise = prise *5 / 100;
    const pay = prise -disPrise;
    console.log(pay);
}

else{
console.log(prise); 
}