// function sum (a){
//     return function (b){
//         return a + b;
//     }
// }
// let sumOfTwo = sum(5);
// console.log(sumOfTwo(5));
// console.log(sum(1)(3));

/* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(firstNum, secondNum) {
//     return function (x){
//         return x >= firstNum && secondNum >= x;
//     }
// }
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// function inArray(array){
//     return function(elem){
//         return array.includes(elem);
//     }
// }
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// function byField (nameField){
//     return function (a, b){
//         return a[nameField] > b[nameField] ? 1 : -1;// тут мне нужно объяснить
//     }
// }
//
// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            console.log( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

console.log(army[0]()); // у 0-го стрелка будет номер 10
console.log(army[5]()); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...