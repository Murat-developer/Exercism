const countYears = (p, i, t, d) => {
  let years = 0;
  while (p < d) {
    p += p * i * (1 - t);
  }
  return years;
};

console.log(countYears(1000, 0.05, 0.18, 1100));
