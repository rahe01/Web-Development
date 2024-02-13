function areaCommonFunction(inputId) {
    const getId = document.getElementById(inputId);
    const getInnertext = getId.value;
    const convertNumber = parseFloat(getInnertext);
    return convertNumber;
  }


  function ellipsArea(){

    const ellipsA = areaCommonFunction('ellipsA');
    const ellipsB = areaCommonFunction('ellipsB');

    const area = 3.14*ellipsA*ellipsB;

    const span = document.getElementById('ellipsSpan');

    span.innerText = area;

    document.getElementById('ellipsA').value ='';
    document.getElementById('ellipsB').value = '';



  }