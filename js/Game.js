class Game {
    constructor(missed = 0, phrases) {
        this.missed = missed;
        this.phrases = [];
    }
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return this.phrases[randomPhrase];
    }
    get randomPhrase() {
        return this._randomPhrase;
    }
    set randomPhrase(randomPhrase) {
        this._randomPhrase = randomPhrase;
    }

    handleInteraction(letterPressed) {
        if (this.missed < 5) {
            this.removeLife();
        } else {
            this.gameOver();
        }
    }

    removeLife() {
        const heart = document.getElementsByClassName('tries')[0];
        heart.parentNode.removeChild(heart);
        this.missed++;
        console.log('You have made ' + this.missed + ' mistakes!');
    }

    checkForWin() {

    }

    gameOver() {
        console.log('You lost!');
    }

    startGame() {
        const chosenPhrase = this.getRandomPhrase();
        this.randomPhrase = chosenPhrase;
        chosenPhrase.addPhraseToDisplay();
    }
}