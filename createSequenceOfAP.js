const range = function (start, end, diff) {
  const numbers = [];
  for (let num = start; num <= end; num += diff) {
    numbers.push(num);
  }

  return numbers;
}

const sequence = function (sequence, element) {
  sequence.push(sequence.at(-1) + element);

  return sequence;
}

const APsequence = function (first, nth, diff) {
  const fill = function () {
    return diff;
  }

  return range(1, nth, 1).map(fill).reduce(sequence, [first]);
}


// Sum of AP;

const sum = function (num1, num2) {
  return num1 + num2;
}

const sumOfAP = function (first, nth, diff) {
  return APsequence(first, nth, diff).reduce(sum, 0);
}