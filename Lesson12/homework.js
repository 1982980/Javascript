// todo - getNumbersInRange - two numbers as parameters. Return array of numbers in range
//  E.g. getNumbersInRange(5, 9) // [6, 7, 8]
const getNumbersInRange = function (firstNum, secondNum) {
  const arr = [];
  for (let i = 1; i <= (secondNum - firstNum) - 1; i++) {
    arr.push(firstNum + i);
  }
  return arr;
};
console.log(getNumbersInRange(10, 20));
