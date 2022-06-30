const numbers = [5, 8, 6, 3, 4];

const sortArray = (array) => {
  const odd = array
    .filter((el) => {
      return el % 2;
    })
    .sort((a, b) => a - b);
  return array.map((item) => {
    return item % 2 ? odd.shift() : item;
  });
};
console.log(sortArray(numbers));
