var possibleWords = ["javascript", "css", "html", "bootstrap"];
let currentWord = 'css'
let wins = 0
let guessesRemaining = 13
let lettersGuessed = []
function initGame() {
    assignCurrentWord()
    setEventListeners()
    updateDOM()
}
initGame()
function wordHasBeenGuessed() {
    for (let i = 0; i < currentWord.length; i++) {
        if (lettersGuessed.includes(currentWord[i])) {

        } else {
            return false
        }
    }
    return true
}
function assignCurrentWord() {
    const index = Math.floor(Math.random() * ((possibleWords.length - 1) - 0 + 1)) + 0;
    currentWord = possibleWords[index]
}
function setEventListeners() {
    document.onkeyup = function (e) {
        lettersGuessed.push(e.key)
        if (wordHasBeenGuessed()) {
            wins++
            document.getElementById('totalWins').textContent = wins
            initGame()
        }
        shouldGuessesGoDown(e.key)
        console.log(currentWord, lettersGuessed, guessesRemaining)
        updateDOM()
        checkIfUserLost()
    }
}
function checkIfUserLost() {
    if (guessesRemaining <= 0) {
        alert('You Loose!!') 
    }
}
function shouldGuessesGoDown(letterGuessed) {
    if (!currentWord.includes(letterGuessed)) {
        guessesRemaining = guessesRemaining - 1
    }
}
function updateDOM() {
    document.getElementById("guessesRemaining").textContent = guessesRemaining
    document.getElementById("lettersGuessed").totextContent = lettersGuessed
    showLettersOrDashes()
}
function showLettersOrDashes() {
    let displayWord = ''
    for (let i = 0; i < currentWord.length; i++) {
        if (lettersGuessed.includes(currentWord[i])) {
            displayWord = displayWord + currentWord[i] + ' '
        } else {
            displayWord = displayWord + '_' + ' '
        }
    }
    document.getElementById('currentWord').textContent = displayWord
}