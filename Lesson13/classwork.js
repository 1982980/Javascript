// const getFactorial = function (num) {
//     let acc = 1;
//     for (let i = num; i >= 1; i--) {
//         acc *= i;
//     }
//     return acc;
// };

// console.log(getFactorial(5));

const getFactorial = function (num) {
  if (num === 1) {
    return 1;
  }
  return num * getFactorial(num - 1);
};
// console.log(getFactorial(10));

// const getFibonacci = function (num) {
//     const array = [0, 1];
//     for (let i = num; i > 2; i--) {
//         const newNum = array[array.length - 2] + array[array.length - 1];
//         array.push(newNum);
//     }
//     return array;
// };
// console.log(getFibonacci(5));

const getFibonacci = function (num) {
  if (num === 2) {
    return [0, 1];
  }
  const array = getFibonacci(num - 1);
  array.push(array[array.length - 1] + array[array.length - 2]); // push сумму двух последних элементов массива
  return array;
};

console.log(getFibonacci(10));
