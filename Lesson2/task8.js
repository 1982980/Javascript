"use strict";
function notBad (str) {
  let indxNot = str.indexOf("not");
  let indxBad = str.indexOf("bad");
  if (indxBad > indxNot) {
    if (str.includes("not") && str.includes("bad")) {
      return alert (str.slice(0, indxNot) + "good" + str.slice(indxBad, 0));
    } else {
      return alert (str)
  }
} else {
  return alert (str)
}};

notBad ('This movie is not so bad!');
