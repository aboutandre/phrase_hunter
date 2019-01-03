const game = new Game();
const startGameButton = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');

function resetDisplay() {
    const overlay = document.getElementById('overlay');
    overlay.setAttribute('class', 'is-hidden');
};

function markButton(clickedButton) {
    clickedButton.setAttribute('disabled', true);
    game.handleInteraction(button);
};

startGameButton.addEventListener('click', function() {
    resetDisplay();
});

onscreenKeyboard.addEventListener('click', function (e) {
    if (e.target.className === 'key') {
        markButton(e.target);
    }
});

document.addEventListener('keydown', function (e) {
    game.handleInteraction();
});