let array = [-1, 0, -3, -5];

const checkIsNull = function (array) {
  for (let value of array) {
    if (value > 0) {
      return true;
    }
  }
  return false;
};

console.log(checkIsNull(array));
