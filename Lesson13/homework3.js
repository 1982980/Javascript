// TODO Find intersection numbers in array. Two arrays as parameters. Return array with unique intersection parameters:
// const intersectionArray = function (arr1, arr2) {
//   const array = arr1.filter((elem) => arr2.includes(elem));
//   const newArr = array.filter((elem, index) => !array.includes(elem, index + 1));
//   return newArr;
// };
const intersectionArray = function (arr1, arr2) {
  if (arr2.includes(arr1[i])) {
    newArr.push(arr1[i]);
  }
};

console.log(intersectionArray([1, 2, 2, 3], [2, 3, 4]));
