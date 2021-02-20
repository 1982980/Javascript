"use strict";

function checkPassword () {
  let password = prompt ("Password?");
  let passwordConfirm = prompt("Confirm password?");
  if (password === passwordConfirm) {
    return alert("Password validated")
  } else {
    return alert("Password don't match")
  };
};

checkPassword();
