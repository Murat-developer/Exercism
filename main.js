const str = 'The quick brown fox jumps over the lazy dog';

const isPangram = (string) => {
  return (
    string
      .toLowerCase()
      .match(/[a-z]/g)
      .sort()
      .join('')
      .replace(/(.)\1+/g, '$1').length === 26
  );
};
console.log(isPangram(str));
