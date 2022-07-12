// var makeGrid = function (l, w) {
//   var odd = ' #'.repeat(w);
//   var even = '# '.repeat(w);

//   for (i = 1; i <= l; i++) {
//     if (i % 2 == 0 || i == 2) {
//       console.log(even);
//     } else {
//       console.log(odd);
//     }
//   }
// };
// makeGrid(4, 4);

const cheessboard = (input) => {
  let output = '';
  for (let i = 0; i < input; i++) {
    for (let x = 0; x < input; x++) {
      if ((x + i) % 2 === 0) output = output += ' ';
      else output = output += '#';
    }
    output += '\n';
  }
  console.log(output);
};
cheessboard(8);
