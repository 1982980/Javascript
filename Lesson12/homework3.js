// TODO Find intersection numbers in array. Two arrays as parameters. Return array with unique intersection parameters:
// E.g. [1, 2,2, 3], [2, 3, 4] // [2, 3]
const intersectArray = function (array1, array2) {
  const resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        for (let k = 0; k < array1[i]; k++) {
          if (array1[i] !== array1[k]) {
            resultArray.push(array1[i]);
          }
        }
      }
    }
  }
  return resultArray;
};

console.log(intersectArray([1, 2, 2, 3, 4, 5, 5], [5, 2, 3, 4]));
