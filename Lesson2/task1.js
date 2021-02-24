"use strict";
const getWelcomeMessage = function() {
  const firstName = prompt("First name?", "Parvez");
  const lastName = prompt("Last name?", "Ansari");
  return alert(`Hello ${firstName} ${lastName}`);
}

getWelcomeMessage();
