class Phrase {
    // Constructor to set the phrase
    constructor(phrase) {
        this.phrase = phrase;
    }

    // Method to add the phrase to the viewport
    addPhraseToDisplay() {
        const phrase = this.phrase;
        // Get the placeholder for the letters
        const list = document.getElementById('phrase').firstElementChild;

        // Iterate through all the letters in the phrase
        for (let i = 0; i < phrase.length; i++) {
            // Variable for the letter
            let letter = '';
            // Create the DOM nodes with the necessary classes and set the character.
            // Each letter is also created as a class in order to be selected later
            // in case the phrase has the same letter multiple times
            if (phrase[i] === ' ') {
                // If the current character in the phrase is an empty space
                // Show the space
                letter = `<li class="show space ${phrase[i]}">${phrase[i]}</li>`;
            } else {
                // If it's not a space we hide the letter
                letter = `<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`;
            }
            // Then the character is added
            list.insertAdjacentHTML('beforeEnd', letter)
        }
    }
    // Method to check if the letter matches the phrase
    checkLetter(letter) {
        return !!this.phrase.match(letter);
    }

    // Method that shows the letter if matched
    showMatchedLetter(letter) {
        // The letters classes that have been created in the addPhraseToDisplay loop
        // are used here to be shown
        const matchedLetter = document.getElementsByClassName(letter);
        // This loop iterates through the length of the matched letters array
        for (let i = 0; i < matchedLetter.length; i++) {
            // Add the class "show" to each matched letter
            matchedLetter[i].classList.add('show');
        }
    }
};