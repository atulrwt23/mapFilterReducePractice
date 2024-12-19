// Write a function that first filters out all odd numbers, then squares the 
// remaining even numbers, and finally calculates the sum of the squared values.

const sum = function (num1, num2) {
  return num1 + num2;
}

const square = function (number) {
  return Math.pow(number, 2);
}

const isEven = function (num) {
  return num % 2 === 0;
}

const sumOfSquaresOfAllEven = function (numbers) {
  return numbers.filter(isEven).map(square).reduce(sum, 0);
}