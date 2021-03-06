function getWelcomeMessage() {
  const firstName = prompt("First name?", "Parvez");
  const lastName = prompt("Last name?", "Ansari");
  return `${firstName} ${lastName}`;
}

function reverseString(str) {
  let newStr = str.toLowerCase();
  let newWord = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    newWord += newStr[i];
  }
  return console.log(newWord);
  // return str.split("").reverse().join("");
}
const welcomeMessage = getWelcomeMessage();
// reverseString(welcomeMessage);

const reversedString = reverseString(welcomeMessage);
console.log(reversedString, "outside of function");
