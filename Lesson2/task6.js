"use strict";
function  mixUp (firstWord, secondWord) {
  let firstWordMix = secondWord.slice(0, 2) + firstWord.slice(2);
  let secondWordMix = firstWord.slice(0, 2) + secondWord.slice(2);
  return alert(firstWordMix + " " + secondWordMix);
}

mixUp("dog", "dinner");
