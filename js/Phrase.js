class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const phrase = this.phrase;
        const list = document.getElementById('phrase').firstElementChild;

        for (let i = 0; i < phrase.length; i++) {
            let letter = '';

            if (phrase[i] === ' ') {
                letter = `<li class="hide space ${phrase[i]}">${phrase[i]}</li>`;
            } else {
                letter = `<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`;
            }

            list.insertAdjacentHTML('beforeEnd', letter)
        }
    }

    checkLetter(letter) {
        return !!this.phrase.match(letter);
    }

    /**
     * Reveals the letter(s) on the board that matches player's selection.
     *
     */
    showMatchedLetter(letter) {
        const matchedLetter = document.getElementsByClassName(letter);
        console.log(`This is the length of the machtedLetter: ${matchedLetter.length}`);
        for (let i = 0; i < matchedLetter.length; i++) {
            matchedLetter[i].classList.add('show');
        }
    }
};