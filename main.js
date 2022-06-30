const arrays = [0, 1, 5];

const oddOrEven = (array) => {
  if (array.length === 0) return 'even';
  else {
    let sum = array.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sum % 2 === 0 ? 'even' : 'odd';
  }
};
console.log(oddOrEven(arrays));
