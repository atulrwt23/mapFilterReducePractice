// Get array of all the capital first char;
// Given => ["a", "A"];
// Output => ["A"];

function isFirstCharCapital(word) {
  return word.at(0) === word.at(0).toUpperCase();
}

const allOfFirstCapital = function (words) {
  return words.filter(isFirstCharCapital);
}
