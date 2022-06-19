const string = 'John Smith';

const reverseStr = (input) => {
  return input.split('').reverse().join('');
};
console.log(reverseStr(string));
