const reversWord = (str) => {
  // first iteration

  // let output = '' ;
  // for(let i = str.length - 1; i >= 0; i--)
  // output += str[i];
  // return output;

  // second iteration
  // return str.split('').reverse().join('');
  // Spread operator
  return [...str].reverse().join('');
};
console.log(reversWord('Word'));
