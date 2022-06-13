let info = 'World';

const foundFirstLetter = (input) => {
  return input.charAt(0);
};
console.log(foundFirstLetter(info));

let note = 'Stands so high';

const foundLastLetter = (string) => {
  let cut = string.trim();
  return cut[cut.length - 1];
};
console.log(foundLastLetter(note));

let message = 'SHIRE';

const capitalizeWord = (input) => {
  let start = input.charAt(0).toUpperCase();
  let end = input.slice(1).toLowerCase();
  return start + end;
};
console.log(capitalizeWord(message));

let title = 'work';

const concatPlease = (str) => {
  let start = str.charAt(0).toUpperCase();
  let end = str.slice(1).toLowerCase();
  let add = ', please';
  return start + end + add;
};
console.log(concatPlease(title));
