const removeCardFromTheBottom = (cards) => {
  cards.shift();
  return cards;
};
console.log(removeCardFromTheBottom([8, 5, 9, 7, 1]));
