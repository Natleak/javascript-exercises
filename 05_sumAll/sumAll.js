const sumAll = function (first, last) {
  if (first > last) {
    const min = first;
    first = last;
    last = min;
  }
  if (first < 0 || last < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(first) || !Number.isInteger(last)) {
    return "ERROR";
  }
  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
