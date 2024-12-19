function rumble(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function greatest(nums) {
  return nums.reduce(rumble);
}