"use strict";
function verbing(str) {
  if (str.slice(-3) === "ing") {
    return alert(str.slice(0, -3) + "ly");
  } else if (str.length >= 3) {
    return alert(str + "ing");
  } else {
    return alert(str);
  }
}

verbing("swimming");
