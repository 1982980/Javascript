// TODO getSumOfNumbers - one number as an parameter. Return sum of numbers from 0 to n
// E.g. getSumOfNumbers(3)// 0+1+2+3 // 6
const getSumOfNumbers = function (number) {
  let sum = number;
  for (let i = (number - 1); i > 0; i--) {
    sum += i;
  }
  return sum;
};
console.log(getSumOfNumbers(4));
