var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const deletePropertyRollno = function (obj) {
  // тут желательно сделать проверку есть ли такое свойство
  console.log(student);
  delete obj.rollno;
  console.log(student);
};

deleteProperty(student);
