const repeatString = function (word, nbRepetition) {
  let string = "";
  if (nbRepetition < 0) {
    return `ERROR`;
  } else {
    for (let i = 0; i < nbRepetition; i++) {
      string = string + word;
    }
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
