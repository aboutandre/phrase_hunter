// We initialize the game
const game = new Game();
// The elements we will need packed as variables
const startGameButton = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');
const overlay = document.getElementById('overlay');

// Reset the game and start anew
function resetDisplay() {
    game.startGame();
};

// Mark the clicked button function
function markButton(clickedButton) {
    // The button clicked will be disabled to avoid double entries
    clickedButton.setAttribute('disabled', true);
    // A method is called to deal with the passed parameter
    game.handleInteraction(clickedButton);
};

// If the start button (incidentally the reset button), reset the display
startGameButton.addEventListener('click', function() {
    resetDisplay();
});

// Listener for the onscreenKeyboard
onscreenKeyboard.addEventListener('click', function (e) {
    // Check if the element clicked is a key and not the spaces between the keys
    if (e.target.className === 'key') {
        // Call the markButton function and pass the clicked button as the parameter
        markButton(e.target);
        // Call the handleInteraction method and pass the clicked button letter as a parameter
        game.handleInteraction(e.target.textContent);
    }
});
