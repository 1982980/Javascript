//Write a JavaScript program to get the length of a JavaScript object
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
  b: 32,
  c: 4,
};

//вариант 1
// const getLengthObject = function (obj) {
//   let lengthObj = Object.keys(obj).length;
//   console.log(lengthObj);
// };

// вариант 2
const getLengthObject = function (obj) {
  let length = 0;
  for (let i in obj) {
    length++;
  }
  console.log(length);
};
getLengthObject(student);
