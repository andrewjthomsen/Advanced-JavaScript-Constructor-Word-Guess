var Letter = require("./letters.js");

function Word(word) {
  this.letters = word;
  this.letters = [];
  // Breaks the word into an array of letters.
  this.splitLetters = function() {
    var newArray = word.split("");
    for (var i = 0; i < newArray.length; i++) {
      var newLetter = new Letter(newArray[i]);
      this.letters.push(newLetter);
    }
  };
  this.guess = function(letterGuess) {
    this.letters.forEach(letter => {
      letter.compareLetter(letterGuess);
    });
  };
  // function responsible for displaying word
  this.display = function() {
    var displayWord = [];
    this.letters.forEach(letter => {
      displayWord += letter.returnLetter() + "";
    });
    return displayWord;
  };
}

Word.prototype.toString = function() {
  return this.letters
    .map(function(l){ return l.letter; })
    .join("");
};
module.exports = Word;
