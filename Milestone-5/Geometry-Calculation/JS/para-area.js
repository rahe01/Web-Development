function areaCommonFunction(inputId) {
    const getId = document.getElementById(inputId);
    const getInnertext = getId.value;
    const convertNumber = parseFloat(getInnertext);
    return convertNumber;
  }


  function paraArea(){

    const paraBase = areaCommonFunction('paraBase');
    const paraHeight = areaCommonFunction('paraHeight');

    const calculateArea = paraBase*paraHeight;

    const paraSpan = document.getElementById('paraSpan');

    paraSpan.innerText = calculateArea;

    document.getElementById('paraBase').value ='';
    document.getElementById('paraHeight').value = '';


  }