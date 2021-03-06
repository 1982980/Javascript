function notBad(str) {
  let indxNot = str.indexOf("not");
  let indxBad = str.indexOf("bad");
  if (indxBad > indxNot && indxBad >= 0 && indxNot >= 0) {
    return alert(str.slice(0, indxNot) + "good" + str.slice(indxBad, 0));
  }
  return alert(str);
}

notBad("This movie is not so bad!");
