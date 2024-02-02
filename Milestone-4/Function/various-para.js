function even(str){
    const size = str.length;


    if(size % 2 ===0){
        return true;
    }
    return false;

}

console.log(even('rahe'));

function doDuble(number , doDublee){
    if(doDublee ===true ){
        const result = number*2;
        return result;
    }

    else{
        const result = number*3;
        return result;
    }
}

console.log(doDuble(2,true))