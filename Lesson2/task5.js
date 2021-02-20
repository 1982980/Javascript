"use strict";

function DrEvil (amount) {
  if (amount < 1e6) {
    return alert (`${amount} dollars`)
  } else {
    return alert (`${amount} dollars (pinky)`)
  }
}

DrEvil(1e6);
