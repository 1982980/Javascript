// Мой вариант не работает
// const array_Clone = function (input) {
//   const clone = {};
//   for (let key of input) {
//     clone[key] = input[key];
//   }
//   return clone;
// };

// your work variant
const array_Clone = function (input) {
  const clone = [];
  for (let value of input) {
    clone.push(value);
  }
  return clone;
};

// w3resourcee
const array_Clone = (input) => input.slice(0);

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const array_Clone = function (input) {
  if(Array.isArray(input)) {
    return [].concat(input)
  }
  return [];
};

const array_Clone = function (input) {
  return [...input]
};
