const nums = [
  3, 30, 34, 5, 954, 1, 2972, 3, 574, 5, 6, 724, 8, 9, 10, 11, 12, 20, 30, 33,
  90, 900, 1000, 354, 99, 1111, 355, 324,
];

function maxNum(array) {
  const check = array.every(element => element == 0);

  if (check) return 0;

  return array
    .map(item => item.toString())
    .sort((str1, str2) => str2 + str1 - (str1 + str2))
    .join("");
}

console.log(maxNum(nums));
