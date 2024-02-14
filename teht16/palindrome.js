const prompt = require('prompt-sync')();

// palindrome check funtion
function isTheWordPalindrome(word) {

  // converts the word to lowercase to make it case-insensitive
  word = word.toLowerCase();
  
  // removes non alphanumeric characters from the word aka spaces etc.
  const regex = /[^a-z0-9]/g; // letter and number range. /g means applied globally to the whole string
  const cleanWord = word.replace(regex, '');

  // reverses the word and compares it with the original word
  return cleanWord === cleanWord.split('').reverse().join('');
}

// asks number from a user
const userInput = prompt('Enter a word: ');

// checks if the word is a palindrome
if (isTheWordPalindrome(userInput)) {
  console.log(`"${userInput}" is a palindrome`);
} else {
  console.log(`"${userInput}" is not a palindrome`);
}
