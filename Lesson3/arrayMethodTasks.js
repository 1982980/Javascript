//Задачи брал от сюда http://old.code.mu/tasks/javascript/base/rabota-s-funkciyami-dlya-massivov-v-javascript.html

// method concat()
// const a = ["a", "b", "c"];
// const b = [1, 2, 3];
//
// const c = a.concat(b);
// console.log(c);
//
// const cb = b.concat(a);
// console.log(cb);
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(arr.concat(arr2));

// method push()
// const arr = ["a", "b", "c"];
// arr.push(1, 2, 3, "foo");
// console.log(arr);

//method reverse()
// const arr = [1, 2, 3, 4];
// console.log(arr.reverse());

//method push() and unshift()
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr.push(4, 5, 6);
// console.log(arr);
// arr.unshift(4, 56);
// console.log(arr);

//method shift() & pop()
// const arr = ["js", "css", "jq"];
// console.log(arr.shift());
// console.log(arr.pop());
// console.log(arr);

//method slice()
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.slice(0, 4);
// const arr3 = arr.slice(-2);
// console.log(arr2);
// console.log(arr3);

//method splice()
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.splice(1, 1, "three");
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.splice(1, 2);
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.splice(1, 0, "a", "b", "c");
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5, 6];
// let arr2 = arr.splice(1, 0, "a", "b");
// arr2 = arr.splice(4, 0, "c");
//
// console.log(arr);

//method sort()
// const arr = [3, 4, 1, 2, 7];
// let arr2 = arr.sort();
// console.log(arr2);

// method Object.keys
const obj = { js: "test", jq: "hello", css: "world" };
let keys = Object.keys(obj);
console.log(keys);
