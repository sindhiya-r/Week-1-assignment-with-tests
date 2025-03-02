/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortString(str){
  var array = str.split("");
  
  var sortedArray = array.sort();
  
  var sortedString = sortedArray.join("");
  
  return sortedString;
}

function isAnagram(str1, str2) {
  if(sortString(str1.toLowerCase()) == sortString(str2.toLowerCase())){
    return true
  } else{
    return false
  }
}
module.exports = isAnagram;
