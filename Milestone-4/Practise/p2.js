function matchString(s1,s2){


    const result= s1.includes(s2);
    if(typeof (s1&&s2) !== 'string'){

        return "nter vailid information";
    }
    return result;


}

console.log(matchString("Rahe ahmed adf",7))