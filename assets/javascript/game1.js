
// Words to be guessed
var possibleWords = [ "JavaScript", "CSS", "HTML", "Bootstrap"];
console.log(possibleWords);

// Current word on screen
var currentWord = 'CSS';
console.log(currentWord);

//  Number of times the word is guessed right
var totalWins = 0;
console.log(totalWins);

//  Number of guesses allowed
const allowedGuesses = 10;
console.log(allowedGuesses);

//  Amount of guesses remaining
var guessesRemaining = 0;
console.log(guessesRemaining);

// Letters already guessed
var guessedLetters = [];
console.log(guessedLetters);



var currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
document.getElementById("#currentWord");
console.log(currentWord);





