function sum(number){
    return function(innerNum){
        return number+innerNum;
    }
}
let sumOfTwo = sum(2)
sumOfTwo(5);
sumOfTwo(10);
console.log(sumOfTwo(15));
console.log(sumOfTwo(10));