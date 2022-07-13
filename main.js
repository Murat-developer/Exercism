const cheessboard = (input) => {
  let output = '';
  for (let i = 1; i <= input; i++) {
    for (let x = 1; x <= input; x++) {
      (i + x) % 2 === 0
        ? (output += ' ')
        : (output += '#');
    }
    output += '\n';
  }
  console.log(output);
};
cheessboard(8);
