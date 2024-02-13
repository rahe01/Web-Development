function areaCommonFunction(inputId) {
    const getId = document.getElementById(inputId);
    const getInnertext = getId.value;
    const convertNumber = parseFloat(getInnertext);
    return convertNumber;
  }

  function pentagonArea (){
    const pentagonP = areaCommonFunction('pentagonP');
    const pentagonB = areaCommonFunction('pentagonB');

    const area = 0.5*pentagonP*pentagonB;

    const span = document.getElementById('pentagonSpan');

    span.innerText = area;

    document.getElementById('pentagonP').value = '';
    document.getElementById('pentagonB').value = '';



}