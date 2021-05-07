// TODO Fibonacci()
// const getFibonacci = function (num) {
//   if (num === 2) {
//     return [0, 1];
//   }
//   const arr = getFibonacci(num - 1);
//   arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//   return arr;
// };
// console.log(getFibonacci(10));

// TODO pow()
// const getPow = function (num, stage) {
//   if (stage === 1) {
//     return num;
//   }
//   return num * getPow(num, stage - 1);
// };
// console.log(getPow(3, 3));

// TODO factorial()
// const getFactorial = function (num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + getFactorial(num - 1);
// };
// console.log(getFactorial(1000));

// TODO numberInRange()
const getNumberInRange = function (numStart, numFinish) {
  if (numStart + 2 === numFinish) {
    return [numStart + 1];
  }
  const arr = getNumberInRange(numStart, numFinish - 1);
  arr.push(numFinish - 1);
  return arr;
};
console.log(getNumberInRange(1, 10));
