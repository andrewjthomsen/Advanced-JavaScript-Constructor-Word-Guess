var Word = require("./words.js");
var Letter = require("./letters.js");
var wordContainerArr = [  // array of words- things you find on beach
  "sand",
  "fish",
  "towel",
  "umbrella",
  "bottle",
  "Seagull",
  "shark",
  "shell",
  "riptide",
  "ship",
  "submarine",
  "crab",
  "dolphin"
];
var guesses;
var remainingGuesses = 12;
var word;
var chosenWord;
var letterArray = [];  // array for letter objects
var dashArray = []; // array for dashes

// Picks a word and resets the guesses so we can start.
function playGame() {
  pickWord();
  guesses = 5;
}

// Randomly chooses a word. 
function pickWord() {
  var randomNum = Math.floor(Math.random() * wordContainerArr.length);
  let chosenWord = wordContainerArr[randomNum];
  word = new Word(chosenWord);
  word.splitLetters();
  grabGuess();
  // console.log(word);
}
// function responsible for prompting user for guessed letter, using Inquirer
var grabGuess = function() {
  var inquirer = require("inquirer");
  inquirer
    .prompt([
      { name: "userGuess", message: "Guess a letter." + word.display() }
    ])
    .then(answers => {
      // console.log(answers);
      var check = [];
  
      // if statement isn't working correctly
      // every time letter is guessed it returns congatulations
      // not checking if letter guessed is a letter of chosen word/ displayWord
      // Returns true if user letter guess
      // completes the target word, false if not
      function gameOver() {
        word.letters.forEach(letter => {
          letter.compareLetter(answers.userGuess);
          check.push(letter.returnLetter());
          // console.log(check);
        });

        // Complete word guessed
        if(word.toString()== check.join('')) {
          return true;
        }
        
        return false;
      }

      // If user has successfully completed the word
      if (gameOver()) {
        console.log("You won!!");
      } else {
        if (remainingGuesses === 0) {
          console.log("Your're out of guesses!");
          restartGame();
        } else {
          remainingGuesses--;
          grabGuess();
        }
      }
    });
};
function restartGame() {
  var inquirer = require("inquirer");
  inquirer
    .prompt([
      {
        name: "gameOver",
        message: "Would you like to try again?",
        type: "List",
        choices: ["Yes", "No"]
      }
    ])
    .then(answers => {
      if (answers.gameOver === "yes") {
        playGame();
      } else {
        console.log("Thanks for playing!");
      }
    });
}
playGame();

// A variable to keep track of the guesses the user has left, and modifications
// that remove one guess every time the user enters a letter and stops
// the game when they run out of guesses
