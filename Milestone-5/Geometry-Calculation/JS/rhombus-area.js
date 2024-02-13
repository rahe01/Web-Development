function areaCommonFunction(inputId) {
    const getId = document.getElementById(inputId);
    const getInnertext = getId.value;
    const convertNumber = parseFloat(getInnertext);
    return convertNumber;
  }

  function rhombusArea(){
    const rhombusD1 = areaCommonFunction('rhombusD1');
    const rhombusD2 = areaCommonFunction('rhombusD2');

    const area = 0.5*rhombusD1*rhombusD2;

    const span = document.getElementById('rhombusSpan');

    span.innerText = area;

    document.getElementById('rhombusD1').value ='';
    
    document.getElementById('rhombusD2').value ='';

  }