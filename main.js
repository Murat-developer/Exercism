const uniqueInOrder = (it) => {
  // let unique = [];
  // for (let i = 0; i < iterable.length; i++) {
  //   let curr = iterable[i];
  //   let next = iterable[i + 1];
  //   let prev = iterable[i - 1];
  //   if (curr !== next) unique.push(curr);
  // }
  // return unique;

  // let output = [];
  // let last;
  // for (let i = 0; i < it.length; i++)
  //   if (it[i] !== last) output.push((last = it[i]));

  // return output;

  return [...it].filter((a, i) => a !== it[i - 1]);
};

console.log('a', 'b', 'c', 'd');
