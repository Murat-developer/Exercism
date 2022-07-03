const correctMistakes = (inputString) => {
  // organize correctioins in an object / map
  const corrections = {
    5: 'S',
    0: 'O',
    1: 'I',
  };

  return (
    inputString
      // split the string into an arrray of characters
      .split('')
      //check if the current character is in the corrections object
      // if it is , correct it , else return it unchanged
      .map((el) =>
        corrections.hasOwnProperty(el)
          ? corrections[el]
          : el,
      )
      // join the array of characters to a string
      .join('')
  );
};

console.log(correctMistakes('Par15'));
