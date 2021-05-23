function findWin(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return `it is empty`;
  } else if (str1.length !== str2.length) {
    return `Can't compare it`;
  }

  let arrChar1 = str1.split("").sort();
  let arrChar2 = str2.split("").sort();

  console.log(arrChar1);
  console.log(arrChar2);

  if (
    arrChar1.every((el, idx) => el <= arrChar2[idx]) ||
    arrChar2.every((el, idx) => el <= arrChar1[idx])
  ) {
    return true;
  }
  return false;
}

let str1 = `abe`;
let str2 = "acd";

console.log(findWin(str1, str2));

function isPolindrome(string) {
  return string === string.split("").reverse().join("");
}

function largestPolindrome(string) {
  if (string.length === 0) {
    return `it is empty`;
  }

  let largest = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      let substr = string.slice(i, j);

      if (isPolindrome(substr)) {
        if (largest.length < substr.length) {
          largest = substr;
        }
      }
    }
  }

  if (largest.length === 0) {
    return `Haven't polindrome`;
  }

  return largest;
}

let string = "babaaabaaa";

console.log(largestPolindrome(string));

function countConcat(string) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j < string.length; j++) {
      const subString = string.slice(i, j);

      if (subString.length !== 0) {
        if (string.indexOf(subString.concat(subString)) !== -1) {
          if (map.get(subString) !== 1) {
            map.set(subString, 1);
          }
        }
      }
    }
  }

  console.log(map);

  return count;
}

console.log(countConcat("abcabcabc"));
