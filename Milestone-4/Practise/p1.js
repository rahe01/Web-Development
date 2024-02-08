// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }

  const ticket = ticketSale * 120;
  const stafBill = 500 + 8 * 50;
  const total = ticket - stafBill;
  return total;
}

console.log(calculateMoney(-99))
