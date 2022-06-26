const calculateResellPrice = (originalPrice, age) => {
  if (age < 3) return 0.8 * originalPrice;
  else if (age > 10) return 0.5 * originalPrice;
  else return 0.7 * originalPrice;
};
console.log(calculateResellPrice(1000, 5));
