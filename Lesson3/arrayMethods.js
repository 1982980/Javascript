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
