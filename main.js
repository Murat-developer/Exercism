const removeCardFromStack = (cards, position) => {
  cards.splice(position, 1);
  return cards;
};
console.log(removeCardFromStack([3, 2, 6, 4, 8], 2));
