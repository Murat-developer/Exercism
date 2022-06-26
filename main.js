const word = 'world';

const capitalizeWord = (input) => {
  let start = input.charAt(0).toUpperCase();
  let end = input.slice(1).toLowerCase();
  return start + end;
};
console.log(capitalizeWord(word));
