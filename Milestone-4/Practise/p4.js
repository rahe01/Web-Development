// Problem 04 : Make A Great Password

function password(obj) {
  if (
    !obj.hasOwnProperty("name") ||
    !obj.hasOwnProperty("birthYear") ||
    !obj.hasOwnProperty("siteName")
  ) {
    return "Invalid";
  }

  const a = typeof obj.birthYear;
  const b = obj.birthYear.toString().length;

  if (a !== "number" || b !== 4) {
    return "Invalid";
  }

  const site = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  const pass = `${site}#${obj.name}@${obj.birthYear}`;

  return pass;
}
