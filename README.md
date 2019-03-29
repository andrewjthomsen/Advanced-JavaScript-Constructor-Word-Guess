# Advanced-JavaScript-Constructor-Word-Guess

## About this project
A command line version of the classic Hangman game. Uses Javascript constructor functions to create letter and word objects, the inquirer npm package to prompt users to guess a letter, and Node.js to run the Javascript code from the command line. 

## Getting started
To play the game from your computer and/or contribute to this project, perform the following steps:

Clone the repository
Install Node.js
Install the dependencies
Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

  git clone git@github.com:andrewjthomsen/Advanced-JavaScript-Constructor-Word-Guess.git
  cd constructor-hangman
Install Node.js
If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/.

Structure of the project
After you clone the repository, navigate to the project root directory (constructor-hangman). The project directory structure is set up as follows:

Letter.js: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (underscore), depending on whether or not the user has guessed the letter. This constructor includes:

A string value to store the underlying character for the letter.
A boolean value that stores whether that letter has been guessed yet by the user.
A function that returns the underlying character if the letter has been guessed, or a placeholder (underscore) if the letter has not been guessed.
A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. The constructor includes:

An array of new Letter objects representing the letters of the underlying word.
A function that returns a string representing the word. This calls the function on each letter object (defined in Letter.js) that displays the character or an underscore and concatenates those together.
A function that takes a character as an argument and calls the guess function on each letter object (defined in Letter.js).
index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it.
Prompts the user for each guess and keeps track of the user's remaining guesses.
package.json: Lists the project dependencies (third party npm packages) and their version numbers.
.gitignore: Any file or directory listed inside this file will not be tracked by GitHub when code is committed.
package-lock.json: Dependency tree for the project. Lists all the dependencies and their versions.
Install the dependencies
The following npm packages are dependencies to the project. You must install these packages in the project root directory (constructor-hangman) to be able to play Hangman from the command line.

After you clone the repository to a local directory, change directory to the project root directory (constructor-hangman) and run the following command to install the required npm packages:

```text
npm install inquirer
npm install prompt
```

### Starting the game

To start the game, run the following command from the project root directory (constructor-hangman):
node index.js

### How to play

When prompted to enter a letter, press any letter (a-z) on the keyboard to guess a letter.
If incorrect, the guessed letter doesn't appear in the word.
For every incorrect guess, the number of guesses remaining decrease by 1.
If correct, the guessed letter appears in the word.
If all the letters in the word are guesses before the number of guesses remaining reaches 0, winner.
Otherwise, game over.
The game can be exited at any time by pressing Ctrl + C on the keyboard.

### Technologies used to build app

Node.js (https://nodejs.org/en/)
Javascript constructor functions

### Future Plans for App

Create a mySQL database and create a sign up and login system that prompts users for a username and password upon loading up the app.
When random word is chosen at the beginning of the game, display a hint to help the user.
