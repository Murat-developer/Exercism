const totalBirdCount = (birdsPerday) => {
  let count = 0;
  // for (let num of birdsPerday) count += num;
  // return count;
  // return birdsPerday.reduce((acc, curr) => acc + curr);

  birdsPerday.forEach((num) => {
    if (num) count += num;
  });
  return count;
};
console.log(
  totalBirdCount([
    2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1,
  ]),
);
