"use strict";
function getWelcomeMessage() {
  let firstName = prompt("First name?", "Parvez");
  let lastName = prompt("Last name?", "Ansari");
  let fullName = firstName + " " + lastName;
  return alert(`Hello ${fullName}`);
}

getWelcomeMessage();
