const retrieveCard = (
  cards,
  position,
  replacementCard,
) => {
  cards[position] = replacementCard;
  return cards;
};
console.log(retrieveCard([1, 2, 4, 1], 2, 6));
