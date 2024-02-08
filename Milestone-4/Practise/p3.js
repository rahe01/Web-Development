// Problem 03 : Virus in my Array

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  let ar = [];

  for (let i = 0; i < array.length; i++) {
    let k = array[i];

    if (typeof k === "number" && !Number.isNaN(k)) {
      ar.push(k);
    }
  }

  return ar;
}
