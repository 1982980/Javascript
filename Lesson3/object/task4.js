//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
//наверное, можно решить лучше)
const displayStatus = function (obj) {
  for (let i in obj) {
    console.log(obj[i].title);
    console.log(obj[i].author);
    console.log(obj[i].readingStatus);
  }
};

displayStatus(library);
