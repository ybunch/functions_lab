// 2. reverseString
// Write a function, reverseString, that accepts a single argument, a string. The function should return a string with the order of the characters reversed.

// reverseString("Hello, world!")  // logs !dlrow ,olleH


function reverseString(wordToReverse){
let newWord = '';

for(let i = wordToReverse.length - 1; i>=0; i--){
  newWord += wordToReverse[i];
}
console.log(newWord) 
}

reverseString("Hello, world!")