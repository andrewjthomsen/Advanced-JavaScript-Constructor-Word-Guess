// Create a constructor function to create letter
var Letter = function(letter, guessed) {
  this.letter = letter;
  this.guessed = false;
  this.returnLetter = function() {
    if (!this.guessed) {
      return "-";
    } else {
      return this.letter;
    }
  };

  // Compares user guesses to letter in word
  this.compareLetter = function(letterGuess) {
    if (letterGuess === this.letter) {
      this.guessed = true;
    }
  };
};

module.exports = Letter;
