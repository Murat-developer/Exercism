// Replace positioin
const numbers = [1, 2, 4, 1];
const replacePosition = (cards, position = 2) => {
  return cards[position];
};
console.log(replacePosition(numbers));

// Exchange a card in the stack
const numerics = [1, 2, 4, 1];

const setItem = (
  cards,
  position = 2,
  replacementCard = 6,
) => {
  cards[position] = replacementCard;
  return cards;
};
console.log(setItem(numerics));

// Insert a card at the top of the stack
const cards = [5, 9, 7, 1];

const insertItemAtTop = (cards, newCard = 8) => {
  cards.push(newCard);
  return cards;
};
console.log(insertItemAtTop(cards));

// Remove a card from the stack
const cardItems = [3, 2, 6, 4, 8];

const removeCard = (cards, position = 2) => {
  cards.splice(position, 1);
  return cards;
};
console.log(removeCard(cardItems));

// Remove the top card from the stack
const numCards = [3, 2, 6, 4, 8];

const removeFromTop = (cards) => {
  cards.pop();
  return cards;
};
console.log(removeFromTop(numCards));

// Insert a card at the bottom of lthe stack
const cardsNum = [5, 9, 7, 1];

const insertCard = (cards) => {
  cards.unshift(8);
  return cards;
};
console.log(insertCard(cardsNum));

// Remove a card from the bottom
const numericCard = [8, 5, 9, 7, 1, 3];

const removeFromBottomCard = (cards) => {
  cards.shift();
  return cards;
};
console.log(removeFromBottomCard(numericCard));

// Check the size of the stack

const stackNumbers = [3, 2, 6, 4, 8];

const checkSizeOfStack = (stackes) => {
  return stackes.length === 4;
};
console.log(checkSizeOfStack(stackNumbers));
