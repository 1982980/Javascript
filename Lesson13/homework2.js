// todo - getNumbersInRange - two numbers as parameters. Return array of numbers in range
//  E.g. getNumbersInRange(5, 9) // [6, 7, 8]

const getNumbersInRange = function (numStart, numFinish) {
  if (numStart + 2 === numFinish) {
    return [numStart + 1];
  }
  const arr = getNumbersInRange(numStart, numFinish - 1);
  arr.push(numFinish - 1);
  return arr;
};
console.log(getNumbersInRange(5, 9));
