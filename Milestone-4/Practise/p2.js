// Problem-02: Good Name , Bad Name
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  let nameLow = name.toLowerCase();

  const last = nameLow.charAt(nameLow.length - 1);

  if (
    last === "a" ||
    last === "y" ||
    last === "i" ||
    last === "e" ||
    last === "o" ||
    last === "u" ||
    last === "w"
  ) {
    return "Good Name";
  }

  return "Bad name";
}
console.log(checkName("fffo"))