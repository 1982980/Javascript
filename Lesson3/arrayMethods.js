<<<<<<< HEAD
let array = [-1, 3, 3, 5];

const checkIsNull = function (array) {
  return array.every((elem) => elem > 0);
};

const result = checkIsNull(array);
console.log(result);
=======
let array = [1, 3, 3, 5];

// const checkIsNull = function (array) {
//   for (let value of array) {
//     if (value <= 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkIsNull(array));

console.log(array.every((elem) => elem > 0));
>>>>>>> 5650c99d7ca765a79afc0d91f1b678a6694bec4f
