const str = 'COFFEE';

const bePolit = (input) => {
  let start = input.charAt(0).toUpperCase();
  let end = input.slice(1).toLowerCase();
  // let polite = ', please';
  // return start + end + polite;
  return `${start}${end}, please`;
};
console.log(bePolit(str));
