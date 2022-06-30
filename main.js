const arrays = [
  'tree',
  'foling',
  'trashy',
  'blue',
  'abcdef',
  'uvwxyz',
];

const longestConsec = (starr, k) => {
  let arrLength = starr.length;
  let arr = [];

  if (arrLength === 0 || k > arrLength || k <= 0)
    return '';
  for (let i = 0; i <= arrLength - k; i++) {
    let current = starr[i];
    for (let ii = k, jj = 1; ii > 1; ii--, jj++) {
      current += starr[i + jj];
    }
    arr.push(current);
  }
  return arr.reduce(
    (acc, curr) =>
      acc.length > curr.length
        ? acc
        : acc.length === curr.length
        ? acc
        : curr,
    0,
  );
};

console.log(longestConsec(arrays, 2));
