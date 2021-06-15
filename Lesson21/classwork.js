//Write a function called arrayFrom which converts an array-like-object into an array.

// var divs = document.getElementsByTagName('divs');
// divs.reduce // undefined
// var converted = arrayFrom(divs);
// converted.reduce // function(){}....

// function arrayFrom(){
//     return [].slice.call(arguments);
// }

// function  arrayFrom(...arguments) {
//     return (arguments);
// }

//Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

//    Examples:


// function sumEvenArguments(){
//     // let arr = [].slice.call(arguments);
//     // return arr.reduce((acc, cur) => acc + cur);
//     return [].reduce.call(arguments, (acc, cur) => acc +cur);
// }
// console.log(sumEvenArguments(1,2,3,4)) // 6
// sumEvenArguments(1,2,6) // 8
// sumEvenArguments(1,2) // 2

function User(fullName) {
    this.fullName = fullName;
    Object.defineProperty(this, "firstName", {
        get: function(){
            return this.fullName.split(" ")[0];
        },
        set: function(firstName){
            const lastName = this.fullName.split(" ")[1];
            this.fullName = firstName + " " + lastName;
        }
    })
    }
let vasya = new User("Василий Теркин");

