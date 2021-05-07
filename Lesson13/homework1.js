// const getNumber = function (num, arg) {
//   let res = num;
//   for (let i = 1; i < arg; i++) {
//     res *= num;
//   }
//   return res;
// };
// console.log(getNumber(3, 3));

const getNumber = function (num, arg) {
  if (arg === 0) {
    return 1;
  }
  return num * getNumber(num, arg - 1);
};
console.log(getNumber(3, 2));
