function areaCommonFunction(inputId){
    const getId = document.getElementById(inputId);
    const getInnertext = getId.value;
    const convertNumber = parseFloat(getInnertext);

    return convertNumber;
    
}

function triangleArea(){
 const baseTriangle =   areaCommonFunction('triangleBaseInput');
 console.log(baseTriangle);
   
}