class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['hello how are you', 'only a flesh wound', 'meme', 'javascript is awesome'];
        this.chosenPhrase = '';
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    handleInteraction(letterPressed) {
        const letterInPhrase = this.chosenPhrase.checkLetter(letterPressed);

        if (letterInPhrase) {
            console.log(`The letter pressed was ${letterInPhrase}`);
            this.chosenPhrase.showMatchedLetter(letterPressed);
            this.checkForWin();
        } else {
            event.target.classList.add('wrong');
            this.removeLife();
        }
    }

    removeLife() {
        const heart = document.getElementsByClassName('tries')[0];
        heart.parentNode.removeChild(heart);
        this.missed++;
        console.log('You have made ' + this.missed + ' mistakes!');
        if (this.missed === 5) {
            this.gameOver(`Oh noes! No more lives left! The phrase was: "${this.chosenPhrase.phrase}"`);
        }
    }

    checkForWin() {
        const lettersShown = document.querySelectorAll('.show').length;
        const lettersTotal = this.chosenPhrase.phrase.length;

        if (lettersTotal === lettersShown) {
            this.gameOver('You won! Keep on rockin!');
        }
    }

    gameOver(message) {
        console.log('You lost!');
        document.getElementById('game-over-message').innerHTML = message;
        document.getElementById('overlay').classList.toggle('is-hidden');
        document.getElementById('btn__reset').textContent = 'Reset Game';
    }

    startGame() {
        if (startGameButton.textContent === 'Reset Game') {
            window.location.reload(true);
        }
        overlay.classList.toggle('is-hidden');
        const phrase = this.getRandomPhrase();
        console.log(phrase);
        this.chosenPhrase = new Phrase(phrase);
        this.chosenPhrase.addPhraseToDisplay();
    }
}