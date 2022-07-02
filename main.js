const highAndLow = (numbers) => {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(
    ...numbers,
  )}`;
};
console.log(highAndLow('1 2 3'));
