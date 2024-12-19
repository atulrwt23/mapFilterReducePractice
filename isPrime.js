// Is a number prime or not;

const range = function (end) {
  const numbers = [];
  for (let number = 2; number <= Math.floor(end / 2); number++) {
    numbers.push(number);
  }

  return numbers;
}

const isPrime = function (number) {
  if (number < 2) {
    return false;
  }
  
  const isDivisible = function (candidate) {
    return number % candidate === 0;
  }

  return !range(number).some(isDivisible);
}