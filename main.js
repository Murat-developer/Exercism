const numbers = [1, 2, 3, 4];

const includes = (array, searchElement) => {
  // for (let value of array)
  //   if (value === searchElement) return true;

  // return false;

  // return array.filter((value) => {
  //   return value === searchElement;
  // });

  return array.some((item) => {
    return item === searchElement;
  });
};

console.log(includes(numbers, 2));
