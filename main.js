const str = 'Stands so high';

const getLastLetter = (input) => {
  let trimed = input.trim();
  // return trimed[trimed.length - 1];
  return trimed.charAt(trimed.length - 1);
};
console.log(getLastLetter(str));
