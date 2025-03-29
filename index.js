function isPalindrome(word) {
  // Reverse the string
  let reversedWord = word.split("").reverse().join("");

  // Check if the reversed word is the same as the original
  return word === reversedWord;
}

/*
  Pseudocode:
  - Convert the word into an array of characters.
  - Reverse the array.
  - Join the characters back into a string.
  - Compare the original string with the reversed one.
  - Return true if they match, otherwise return false.
*/

/*
  Explanation:
  - We use `.split("")` to break the string into an array of characters.
  - `.reverse()` flips the order of the array.
  - `.join("")` merges the array back into a string.
  - If the original word and the reversed word are the same, it's a palindrome.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
