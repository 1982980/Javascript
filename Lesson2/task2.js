const checkPassword = function () {
  const password = prompt ("Password?");
  const passwordConfirm = prompt("Confirm password?");
  if (password === passwordConfirm) {
   return alert("Password validated")
  }
  return alert("Password don't match")

};

checkPassword();
