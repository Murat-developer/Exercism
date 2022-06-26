// Calculate number of workdays

const daysInBudget = (
  budget = 20000,
  ratePerHour = 89,
) => {
  const fixedDays = 8;
  const dayRate = ratePerHour * fixedDays;

  return Math.floor(budget / dayRate);
};
console.log(daysInBudget());
