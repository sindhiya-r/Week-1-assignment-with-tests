/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var clrStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var revStr = clrStr.split("").reverse().join("").toLowerCase();
  return clrStr==revStr;
}

module.exports = isPalindrome;
