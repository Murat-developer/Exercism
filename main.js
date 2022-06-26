const priceWithMonthlyDiscount = (
  ratePerHour,
  numDays,
  discount,
) => {
  const hoursDay = 8;
  const billAbleDays = 22;
  const discountDays = numDays - (numDays % billAbleDays);
  const fullPriceDays = numDays % billAbleDays;
  return Math.ceil(
    ratePerHour * hoursDay * fullPriceDays +
      ratePerHour *
        hoursDay *
        discountDays *
        (1 - discount),
  );
};

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
