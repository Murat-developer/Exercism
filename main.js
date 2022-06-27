const deck = [1, 3, 9, 3, 7];

const threeOfEachThree = (deck) => {
  return deck.reduce((acc, curr) => {
    if (curr === 3) {
      acc.push(curr, curr, curr);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};
console.log(threeOfEachThree(deck));
