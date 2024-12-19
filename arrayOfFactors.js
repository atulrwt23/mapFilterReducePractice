// Get an array of the factors of a number;

const range = function (start, end, diff) {
  const numbers = [];
  for (let number = start; number <= end; number = number + diff) {
    numbers.push(number);
  }

  return numbers;
}

const rangeOfPossibleFactors = function (number) {
  return [...range(1, Math.floor(number / 2), 1), number];
}

const allFactors = function (number) {
  const isAFactor = function (candidate) {
    return number % candidate === 0; 
  }

  return rangeOfPossibleFactors(number).filter(isAFactor);
}
