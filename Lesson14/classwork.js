//todo Find sum from numbers of array

//sum([1, 2, [3, [4, 5, [6, 7]]]]) // 28
// const getSum = function (array) {
//     return array.flat(Infinity).reduce((acc, elem) => acc + elem, 30)
// }
//
// console.log(getSum([1, 2, [3, [4, 5, [6, 7]]]]));


const products = [{
    "id": 11,
    "name": "Arnoldo",
    "price": 90
}, {
    "id": 12,
    "name": "Bronnie",
    "price": 93
}, {
    "id": 13,
    "name": "Wren",
    "price": 23
}, {
    "id": 14,
    "name": "Leupold",
    "price": 37
}, {
    "id": 15,
    "name": "Stanley",
    "price": 36
}]

// const getSumOfPrice = function (array) {
//     array.reduce((sum, elem) => {
//         console.log(sum, 'HHH');
//         console.log(elem,'AAA');
//         return   sum + elem.price;
//     }, 0)
// }
// console.log(getSumOfPrice(products));

//0 HHH
// { id: 11, name: 'Arnoldo', price: 90 } AAA

//{ id: 11, name: 'Arnoldo', price: 90 } HHH
// { id: 12, name: 'Bronnie', price: 93 } AAA

//todo Get d from function params:
const obj = {a: {b: {c: {d: 4}}}}
function destruction(obj) {
    const{a = "A" {b = "B" {c = "C" {d = "Not num"}}}} = obj;
    console.log(d);
};

console.log (destruction({}));