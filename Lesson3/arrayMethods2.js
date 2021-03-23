let array = [-1, 0, -3, -5];

const checkIsNull = function (array) {
  return array.some((elem) => elem > 0);
};

const result = checkIsNull(array);
console.log(result);
