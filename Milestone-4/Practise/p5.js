// Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
  if (typeof arr !== "object" || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalEarn = 0;

  for (let i = 0; i < arr.length; i++) {
    totalEarn += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3000) {
      return (20 / totalEarn) * 100;
    }
  }

  let totalsave = totalEarn - livingCost;

  if (totalsave <= 0) {
    return "earn more";
  }
  return totalsave;
}
