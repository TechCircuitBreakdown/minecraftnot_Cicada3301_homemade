// script.js

function checkAnswer1() {
    const userAnswer = document.getElementById('answer1').value.toLowerCase();
    const correctAnswer = 'hello world'; // Decoded ROT13 of "Uryyb Jbeyq"
    
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback1').innerText = 'Correct! Well done!';
        document.getElementById('nextPuzzle1').classList.remove('hidden');
    } else {
        document.getElementById('feedback1').innerText = 'Incorrect. Try again.';
    }
}

function revealNextPuzzle() {
    document.getElementById('puzzle2').classList.remove('hidden');
}
