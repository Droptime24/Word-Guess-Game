
// Words to be guessed
var possibleWords = [ "JavaScript", "CSS", "HTML", "Bootstrap"];
console.log(possibleWords);

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

// Current word on screen
var currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
console.log(currentWord);
toScreen()

// Generate
function startGame() {
    for(i =0; i < currentWord.length; i++){
        var letter = {
            letter: currentWord[i].toLowerCase(),
            beenGuessed: false
        }
        guessedLetters.push(letter);
    }   
    console.log(guessedLetters);
    toScreen()
}

// Printing to scren
function toScreen() {
    var word = ""
    for(i = 0; i < guessedLetters.length; i++){
        if(guessedLetters[i].beenGuessed) {
            word += guessedLetters[i].letter
        }else{
            word += "_ " 
        }
        
    }
    document.getElementById("currentWord").innerHTML = word;
    

}
startGame()

