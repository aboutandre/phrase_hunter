class Game {
    // Add our constructor
    constructor() {
        // How many mistakes the player has made
        this.missed = 0;
        // Phrases to be guessed
        this.phrases = ['hello how are you', 'only a flesh wound', 'meme', 'javascript is awesome'];
        // The chosen phrase will be set on the start of the game
        this.chosenPhrase = '';
    }

    // Randomize the phrase selection
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    // This method takes the given button/letter pressed
    handleInteraction(letterPressed) {
        // We call the checkLetter method from the Phrase class
        const letterInPhrase = this.chosenPhrase.checkLetter(letterPressed);
        // Conditional to check if the chosen letter is correct
        if (letterInPhrase) {
            // Show the correct letter
            this.chosenPhrase.showMatchedLetter(letterPressed);
            // Check if all the correct letters are present
            this.checkForWin();
        } else {
            // If the chosen letter is not correct, add to the onscreen keyboard button the class `wrong`
            event.target.classList.add('wrong');
            // Call the removeLife method
            this.removeLife();
        }
    }

    // Method to remove one "life" of the player
    removeLife() {
        // Get the first element with the class "tries"
        const heart = document.getElementsByClassName('tries')[0];
        // Remove the heart
        heart.parentNode.removeChild(heart);
        // Increase the "missed" counter
        this.missed++;
        // Conditional to test if all "lives" have been used
        if (this.missed === 5) {
            // Call the gameOver method with the losing message
            this.gameOver(`Oh noes! No more lives left! The phrase was: "${this.chosenPhrase.phrase}"`);
        }
    }

    // Method to check if the player has guessed all the correct letters
    checkForWin() {
        // Get all the elements that have the class "show"
        const lettersShown = document.querySelectorAll('.show').length;
        // Count how many letters there are in total
        const lettersTotal = this.chosenPhrase.phrase.length;
        // Check if the total numbers of letters is the same as the total number of letters shown
        if (lettersTotal === lettersShown) {
            // Call the gameOver method with the winning message
            this.gameOver('You won! Keep on rockin!');
        }
    }

    gameOver(message) {
        // Set the message in the game over screen to the parameter passed
        document.getElementById('game-over-message').innerHTML = message;
        // Toggle the overlay visibility
        document.getElementById('overlay').classList.toggle('is-hidden');
        // Set the button's text
        document.getElementById('btn__reset').textContent = 'Reset Game';
    }

    startGame() {
        // Conditinal that checks if the text in the button is set to reset
        if (startGameButton.textContent === 'Reset Game') {
            // And then reload the browser
            window.location.reload(true);
        }
        // Toggle the overlay visibility
        overlay.classList.toggle('is-hidden');
        // Get a new random phrase
        const phrase = this.getRandomPhrase();
        this.chosenPhrase = new Phrase(phrase);
        // Add the new phrase to the browser
        this.chosenPhrase.addPhraseToDisplay();
    }
}