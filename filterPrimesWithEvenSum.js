const range = function (start, end, diff) {
  const numbers = [];
  for (let number = start; number <= end; number = number + diff) {
    numbers.push(number);
  }

  return numbers;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  const notDivisible = function (factor) {
    return num % factor !== 0;
  }

  return range(2, Math.sqrt(num), 1).every(notDivisible);
}

function isEven(num) {
  return (num & 1) !== 1;
}

function sumOfDigits(num) {
  let number = Math.abs(num);
  let sum = 0;
  while (number !== 0) {
    sum = sum + (number % 10);
    number = Math.floor(number / 10);
  }

  return sum;
}

function isPrimeAndHasEvenSum(num) {
  return isPrime(num) && isEven(sumOfDigits(num));
}

function primeWithEvenSums(nums) {
  return nums.filter(isPrimeAndHasEvenSum);
}

function evaluateIcon(result) {
  return result ? "✅" : "❌";
}

function evaluateResult(actual, expected) {
  return [actual].join("") === [expected].join("");
}

function testFunctions(testee, nums, expected) {
  const actual = testee(nums);
  const result = evaluateResult(actual, expected);
  const icon = evaluateIcon(result);

  console.log(icon, "actual:", actual, "expected:", expected, "Input:", nums);
}

function testIsPrime() {
  testFunctions(isPrime, 1, false);
  testFunctions(isPrime, 9, false);
  testFunctions(isPrime, -11, false);
  testFunctions(isPrime, 2, true);
  testFunctions(isPrime, 11, true);
  testFunctions(isPrime, 19, true);
}

function testIsEven() {
  testFunctions(isEven, -1, false);
  testFunctions(isEven, 1, false);
  testFunctions(isEven, 3, false);
  testFunctions(isEven, -2, true);
  testFunctions(isEven, 0, true);
  testFunctions(isEven, 2, true);
}

function testSumOfDigits() {
  testFunctions(sumOfDigits, -1, 1);
  testFunctions(sumOfDigits, 1, 1);
  testFunctions(sumOfDigits, 2, 2);
  testFunctions(sumOfDigits, 11, 2);
  testFunctions(sumOfDigits, 19, 10);
  testFunctions(sumOfDigits, 99, 18);
  testFunctions(sumOfDigits, 999, 27);
  testFunctions(sumOfDigits, 9999, 36);
  testFunctions(sumOfDigits, -9999, 36);
}

function testIsPrimeHasEvenSum() {
  testFunctions(isPrimeAndHasEvenSum, 1, false);
  testFunctions(isPrimeAndHasEvenSum, -1, false);
  testFunctions(isPrimeAndHasEvenSum, 23, false);
  testFunctions(isPrimeAndHasEvenSum, 23, false);
  testFunctions(isPrimeAndHasEvenSum, 2, true);
  testFunctions(isPrimeAndHasEvenSum, 11, true);
  testFunctions(isPrimeAndHasEvenSum, 19, true);
}

function testPrimeWithEvenSums() {
  testFunctions(primeWithEvenSums, [1], []);
  testFunctions(primeWithEvenSums, [1, 2], [2]);
  testFunctions(primeWithEvenSums, [1, 2, 3], [2]);
  testFunctions(primeWithEvenSums, [1, 2, 3, 11], [2, 11]);
  testFunctions(primeWithEvenSums, [1, 2, 3, 11, 23], [2, 11]);
  testFunctions(primeWithEvenSums, [1, 2, 3, 11, 23, 19], [2, 11, 19]);
}

function testAll() {
  testIsPrime();
  testIsEven();
  testSumOfDigits();
  testIsPrimeHasEvenSum();
  testPrimeWithEvenSums();
}

testAll();
