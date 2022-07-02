const doubleChar = (str) => {
  return str
    .split('')
    .map((s) => s + s)
    .join('');
};
console.log(doubleChar('String'));
