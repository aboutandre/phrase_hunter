const game = new Game();
const startGameButton = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');
const overlay = document.getElementById('overlay');

function resetDisplay() {
    game.startGame();
};

function markButton(clickedButton) {
    clickedButton.setAttribute('disabled', true);
    clickedButton.classList.add('chosen');
    game.handleInteraction(clickedButton);
};

startGameButton.addEventListener('click', function() {
    resetDisplay();
});

onscreenKeyboard.addEventListener('click', function (e) {
    if (e.target.className === 'key') {
        markButton(e.target);
        game.handleInteraction(e.target.textContent);
    }
});
