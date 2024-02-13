function areaCommonFunction(inputId) {
  const getId = document.getElementById(inputId);
  const getInnertext = getId.value;
  const convertNumber = parseFloat(getInnertext);
  return convertNumber;
}

function triangleArea() {
  const baseTriangle = areaCommonFunction("triangleBaseInput");
  const heightTriangle = areaCommonFunction("triangleHeightInput");
  const calculation = 0.5 * baseTriangle * heightTriangle;
  const triangleSpan = document.getElementById("triangleSpan");
  triangleSpan.innerText = calculation;
  document.getElementById("triangleBaseInput").value = "";
  document.getElementById("triangleHeightInput").value = "";
}
