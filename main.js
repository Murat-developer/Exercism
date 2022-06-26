const insertCardAtTheBottom = (cards, newCard) => {
  cards.unshift(newCard);
  return cards;
};
console.log(insertCardAtTheBottom([5, 9, 7, 1], 8));
