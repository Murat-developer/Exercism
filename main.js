// Get an Item
const numbers = [1, 2, 3, 4, 5];

const getItem = (cards, position) => {
  return (cards[position] = 1);
};
console.log(getItem(numbers));

// Replace index of item
const amount = [1, 2, 4, 1];

function setItem(cards, position = 2, replaceMent = 6) {
  // Default Parameter
  cards[position] = replaceMent;
  return cards;
}
console.log(setItem(amount));

// Add an item end of array
const numeric = [1, 2, 3, 4];

const addNumber = (cards, position = 8) => {
  // Default Parameter
  cards.push(position);
  return cards;
};
console.log(addNumber(numeric));

// Remove an element from index
const counts = [1, 2, 3, 4, 5];

const removeItem = (cards, position) => {
  cards.splice(position, 1);
  return cards;
};
console.log(removeItem(counts));

// Remove an element from end of Array
const dates = [1, 2, 3, 4];

const removeFromEnd = (cards) => {
  cards.pop();
  return cards;
};
console.log(removeFromEnd(dates));

// Add an element from top of Array
const types = [1, 2, 3, 4];

const addFromTop = (cards, newCard = 'str') => {
  cards.unshift(newCard);
  return cards;
};
console.log(addFromTop(types));

// Remove an element from top of Array
const sum = [1, 2, 3, 4];

const removeFromTop = (cards) => {
  cards.shift();
  return cards;
};
console.log(removeFromTop(sum));

// Check size of Array
const totalNumbers = [1, 2, 3, 4, 5];

const checkSizeOfArray = (cards, stackSize) => {
  return cards === stackSize ? true : false;
};
console.log(checkSizeOfArray(totalNumbers));
