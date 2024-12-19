// generate an array of all the factroils of given range;
// all the possible factorials till the number;
// [0, 1, 2, 3, 4, 5] => [1, 1, 2, 6, 24, 120];

const range = function (start, end, diff) {
  const numbers = [];
  for (let num = start; num <= end; num += diff) {
    numbers.push(num);
  }

  return numbers;
}

const allFactorials = function (factorials, number) {
  factorials.push(factorials.at(-1) * number);

  return factorials;
}

const allPossibleFactorials = function (number) {
  return range(1, number, 1).reduce(allFactorials, [1]);
}
