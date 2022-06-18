const countTruthy = (array) => {
  // let count = 0;
  // for (let value of array) if (value) count++;
  // return count;

  // array.forEach((value) => {
  //   if (value) count++;
  // });
  // return count;

  // const sum = array.filter(Boolean).length;
  // return sum;

  return array.reduce((acc, curr) => {
    if (curr) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

console.log(countTruthy([1, 2, 3, 4, null, 0, '']));
