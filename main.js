const insertCardAtTheTop = (cards, newCards) => {
  cards.push(newCards);
  return cards;
};
console.log(insertCardAtTheTop([5, 9, 7, 1], 8));
