const removeCardFromTopStack = (cards) => {
  cards.pop();
  return cards;
};
console.log(removeCardFromTopStack([3, 2, 6, 4, 8]));
