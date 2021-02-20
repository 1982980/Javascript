"use strict";
function getWelcomeMessage() {
  let firstName = prompt("First name?", "Parvez");
  let lastName = prompt("Last name?", "Ansari");
  let fullName = firstName + " " + lastName;
  return fullName;
}

function getLength(str) {
  return alert (str.length);
}

getLength(getWelcomeMessage());
