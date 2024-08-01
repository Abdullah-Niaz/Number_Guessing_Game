const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const previousGuessesSpan = document.getElementById('previousGuesses');
const guessesRemainingSpan = document.getElementById('guessesRemaining');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesRemaining = 10;
let previousGuesses = [];

submitGuessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    guessesRemaining--;
    guessesRemainingSpan.textContent = guessesRemaining;

    previousGuesses.push(guess);
    previousGuessesSpan.textContent = previousGuesses.join(', ');

    if (guess === randomNumber) {
        alert(`Congratulations! You guessed the number in ${10 - guessesRemaining} attempts.`);
        resetGame();
    } else if (guessesRemaining === 0) {
        alert(`You ran out of guesses! The number was ${randomNumber}.`);
        resetGame();
    } else {
        if (guess < randomNumber) {
            alert('Too low! Guess again.');
        } else {
            alert('Too high! Guess again.');
        }
    }
});

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesRemaining = 10;
    previousGuesses = [];

    guessInput.value = '';
    previousGuessesSpan.textContent = '';
    guessesRemainingSpan.textContent = guessesRemaining;
}