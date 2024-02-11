const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

const allahAkberDisplay = document.getElementById("allahAkberDisplay");
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);
const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);

const resetBtn = document.getElementById("resetBtn");

let subhanAllahInitialvalue = 0;
let alhamdulillahInititalValue = 0;
let allahAkberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialvalue === 33) {
    return alert("You are done");
  }
  subhanAllahInitialvalue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialvalue;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (subhanAllahInitialvalue === 0) {
    return alert("No more number");
  }

  subhanAllahInitialvalue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialvalue;
});

alhamdulillahIncrimentBtn.addEventListener("click", function () {
  if (alhamdulillahInititalValue === 33) {
    return alert("You are done");
  }

  alhamdulillahInititalValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahInititalValue;
});

alhamdulillahDecrimentBtn.addEventListener("click", function () {
  if (alhamdulillahInititalValue === 0) {
    return alert("No more number");
  }

  alhamdulillahInititalValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahInititalValue;
});

allahAkberIncrimentBtn.addEventListener("click", function () {
  if (allahAkberInitialValue === 34) {
    return alert("you are done");
  }
  allahAkberInitialValue += 1;
  allahAkberDisplay.innerText = allahAkberInitialValue;
});

allahAkberDecrimentBtn.addEventListener("click", function () {
  if (allahAkberInitialValue === 0) {
    return alert("No more number");
  }
  allahAkberInitialValue -= 1;
  allahAkberDisplay.innerText = allahAkberInitialValue;
});

resetBtn.addEventListener("click", function () {
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahAkberDisplay.innerText = 0;

  subhanAllahInitialvalue = 0;
  alhamdulillahInititalValue = 0;
  allahAkberInitialValue = 0;
  alert("rest");
});
