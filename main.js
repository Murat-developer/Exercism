const range = (start, end) => {
  let output = [];
  for (let i = start; i <= end; i++) output.push(i);

  return output;
};
console.log(range(1, 10));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (numbers) => {
  let sum = [...numbers];
  return sum.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(numbers));

const rangeModify = (start, end, step) => {
  let output = [];
  if (step === undefined) return (step = 1);
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
  } else {
    for (i = start; i >= end; i += step) {
      output.push(i);
    }
  }
  return output;
};
console.log(rangeModify(5, 2, -1));

const reverseArray = (array) => {
  let result = [];
  for (let item of array) result.unshift(item);

  return result;
};
console.log(reverseArray(['a', 'b', 'c', 'd']));

const reverseArrayInPlace = (array) => {
  let temp = [];
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    temp[i] = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp[i];
  }
  return array;
};
console.log(reverseArrayInPlace([1, 2, 3, 4]));

function arrayToList(array) {
  let result = {};
  if (Array.isArray(array)) {
    let currListItem = result;
    for (let item of array) {
      let newListItem = {
        value: item,
        rest: null,
      };
      if (typeof currListItem.rest === 'undefined') {
        result = newListItem;
      } else {
        currListItem.rest = newListItem;
      }
      currListItem = newListItem;
    }
  }
  return result;
}
console.log(arrayToList([1, 3, 5]));

function listToArray(list) {
  let result = [];
  if (
    typeof list === 'undefined' ||
    list.value === undefined ||
    list.rest === undefined
  ) {
    return result;
  } else {
    result.push(list.value);
    while (
      list.hasOwnProperty('rest') &&
      list.rest !== null
    ) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
        result.push(list.value);
      }
    }
  }
  return result;
}
console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}
console.log(prepend(10, prepend(20, null)));

function nth(list, number) {
  return listToArray(list)[number];
}
console.log(nth(arrayToList([10, 20, 30]), 1));

function nthRecursive(list, number) {
  if (number === 0) return list.value;
  if (list.rest === null) return undefined;
  else return nthRecursive(list.rest, number - 1);
}
console.log(nthRecursive(arrayToList([1, 2, 3]), 2));

// Now with hints

function arrayToListWithHints(array) {
  let result = {};
  if (Array.isArray(array)) {
    let list = null;
    array = array.reverse();
    for (let item of array) {
      list = {
        value: item,
        rest: list,
      };
    }
    result = list;
  }
  return result;
}

function listToArrayWithHints(list) {
  let result = [];
  if (
    typeof list === 'undefined' ||
    list.value === undefined ||
    list.rest === undefined
  ) {
    return result;
  } else {
    for (let node = list; node; node = node.rest) {
      if (node.hasOwnProperty('value')) {
        result.push(node.value);
      }
    }
  }
  return result;
}

console.log('\nWith Hints:');
console.log(arrayToListWithHints([10, 20]));
console.log(
  listToArrayWithHints(arrayToListWithHints([5, 6, 7])),
);
