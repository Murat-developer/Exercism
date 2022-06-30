const str = 'abCdE232';

const foundString = (input) => {
  return (
    input
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
};
console.log(foundString(str));
