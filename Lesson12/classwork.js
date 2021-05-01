const getFactorial = function (num) {
  let acc = 1;
  for (let i = num; i >= 1; i--) {
    acc *= i;
  }
  return acc;
};

// console.log(getFactorial(5));

const getFibonacci = function (num) {
  const array = [0, 1];
  for (let i = num; i > 2; i--) {
    const newNum = array[array.length - 2] + array[array.length - 1];
    array.push(newNum);
  }
  return array;
};
// console.log(getFibonacci(5));

const getNumber = function (num, arg) {
  let res = num;
  for (let i = 1; i < arg; i++) {
    res *= num;
  }
  return res;
};
console.log(getNumber(3, 2));
