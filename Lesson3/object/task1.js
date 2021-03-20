const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// вариант №1
// console.log(Object.keys(student).join(","));

//вариант №2
// 1. проверяю является ли переменная объектом
// 2. если переменная не объект, то вывожу сообщение
// 3. проверяю пустой ли объект
// 4. если объект пустой то вывожу сообщение об этом
// 5. если объект не пустой, то перебираю в цикле все свойства объекта (for ... of )
// 6. в цикле название каждого свойства добавляю в массив (можно создавать строку)
// 7. вывожу из цикла массив
// 8. массив перевожу в строку и вывожу в консоль

const stringKeys = function (obj) {
  let arr = [];
  if (typeof obj === "object") {
    if (Object.keys(obj).length > 0) {
      arr = Object.keys(obj);
      return console.log(arr.join());
    }
    return console.log("Error object is empty");
  }
  return console.log("Error isn't object");
};

stringKeys(student);
