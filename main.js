function countWords(word) {
  return word
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: ~~acc[curr] + 1,
      }),
      {},
    );
}

const string = 'You';

console.log(countWords(string));
