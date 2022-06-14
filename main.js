// Get the first letter
const string =
  'Stands so high Huge hooves too Impatiently!';

const getFirstLetter = (input) => {
  return input.charAt(0);
};
console.log(getFirstLetter(string));

// Capitalize a word
const word = 'SHiRE'; // shire result we be same

const capitalWord = (str) => {
  return (
    str.charAt(0).toUpperCase() +
    str.slice(1).toLowerCase()
  );
};
console.log(capitalWord(word));

// Get last letter of sentece
const letter = 'Stands so high';

const getLastLetter = (letter) => {
  const cut = letter.trim();
  return cut[cut.length - 1];
};
console.log(getLastLetter(letter));

// Be polite
const polite = 'horse';

const bePolite = (input) => {
  const start = input.charAt(0).toUpperCase();
  const end = input.slice(1).toLowerCase();
  return `${start}${end}, please `; // Template Littler
};
console.log(bePolite(polite));
