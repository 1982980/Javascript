let array = [-1, 3, 3, 5];

const checkIsNull = function (array) {
  return array.every((elem) => elem > 0);
};

const result = checkIsNull(array);
console.log(result);
