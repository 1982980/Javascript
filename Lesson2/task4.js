"use strict";

function getWelcomeMessage() {
  let firstName = prompt("First name?", "Parvez");
  let lastName = prompt("Last name?", "Ansari");
  let fullName = firstName + " " + lastName;
  return fullName;
}

function reverseString(str) {
  let newStr = str.toLowerCase();
  let newWord = "";
  for(let i = newStr.length -1; i >= 0; i--) {
    newWord += newStr[i];
  }
  return console.log (newWord);
  // return str.split("").reverse().join("");
}

reverseString(getWelcomeMessage());
