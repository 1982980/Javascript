"use strict";
function getWelcomeMessage () {
  const firstName = prompt("First name?", "Parvez");
  const lastName = prompt("Last name?", "Ansari");
  return `${firstName} ${lastName}`;
}

// const getLength = function (str) {
//   return alert (str.length);
// }

const welcomeMessage = getWelcomeMessage();
console.log(welcomeMessage.length); // альтернативный вариант
// getLength(welcomeMessage);
