//TODO домашнее задание Калькулятор

// function Calculator (number1, number2) {
//     this.sum = function () {
//         return number1 + number2;
//     };
//     this.multiply = function(){
//         return number1 * number2;
//     };
//     this.subtract = function(){
//         return number1 - number2;
//     };
//     this.division = function () {
//         return number1 / number2;
//     }
// }
//
// let result = new Calculator( 5, 9);
// console.log(result.sum());
// console.log(result.multiply());
// console.log(result.subtract());
// console.log(result.division())

//TODO новая задачка аккумулятор который получает стартовое значение и хранит после добавления нового числа
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let newNumber = +prompt("Number to add");
        this.value += newNumber;
    }
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений