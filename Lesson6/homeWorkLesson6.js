//1) Написать функцию которая будет возвращать возраст в зависимости от даты рождения
//function getAgeByBirthYear(date) {
//    return age;
//}

//2) Try to work with data https://www.javascripture.com/Date

let birthDate = new Date(prompt("Please enter your birth date", "YYYY-MM-DD"));
console.log(birthDate.getFullYear());

const getAgeByBirthYear = function () {
  let now = new Date();
  let ageMl = Date.parse(now) - Date.parse(birthDate);
  let age = Math.floor(ageMl / 31536000000);
  return age;
};
console.log(getAgeByBirthYear());
