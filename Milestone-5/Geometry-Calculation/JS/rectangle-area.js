function areaCommonFunction(inputId) {
    const getId = document.getElementById(inputId);
    const getInnertext = getId.value;
    const convertNumber = parseFloat(getInnertext);
    return convertNumber;
  }

  function rectangleArea(){
    const rectangleWidth = areaCommonFunction('rectangleWidth');
    const rectangleLength = areaCommonFunction('rectangleLength');

    const areaRect = rectangleWidth*rectangleLength;

    const rectangleSpan = document.getElementById('rectangleSpan');

    rectangleSpan.innerText = areaRect;

    document.getElementById('rectangleWidth').value = '';
    document.getElementById('rectangleLength').value = '';


  }