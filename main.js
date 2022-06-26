// Calculate day rate given an hourly rate;

const dayRate = (ratePerHour = 89) => {
  // Default pramader
  const hoursDay = 8;
  return ratePerHour * hoursDay;
};
console.log(dayRate());
