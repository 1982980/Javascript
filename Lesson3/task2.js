// Мой вариант не работает
// const array_Clone = function (input) {
//   const clone = {};
//   for (let key of input) {
//     clone[key] = input[key];
//   }
//   return clone;
// };

const array_Clone = (input) => input.slice(0);

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
