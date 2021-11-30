// Scoring
let playerScore = 0;
let computerScore = 0;

// Displaying Score & Choices
const buttons = document.getElementById('options');
const body = document.querySelector('body');
const text = document.createElement('div');
body.appendChild(text);
text.classList.add('text');

const divResults = document.createElement('div');
divResults.classList.add('result');

const divScore = document.createElement('div');
divScore.classList.add('score');

// Logging button choice
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playerSelection = playerSelection.toLowerCase();
        body.appendChild(text);
        text.append(divResults, divScore);
        playRound();

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
            playAgain();
        };
    });
}
);

// Declares Winner
function declareWinner() {
    if (playerScore > computerScore) {
        divResults.textContent = `You're a winner!`;
        divScore.textContent = `Your Score: ${playerScore} 
        Computer Score: ${computerScore}`;
    } else 
        divResults.textContent = `Uh oh! You lost!`;
        divScore.textContent = `Your Score: ${playerScore} 
        Computer Score: ${computerScore}`;
};

// Plays Single Round
function playRound(computer, player) {
    computer = computerPlay();
    player = playerSelection;

    if ((player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')) {
        computerScore++;
        divResults.textContent = `${capitalize(computer)} beats ${capitalize(player)}! You lose!`;
        return divScore.textContent = `Your Score: ${playerScore} 
        Computer Score: ${computerScore}`;
    } else if ((player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'rock' && computer === 'scissors')) {
        playerScore++;
        divResults.textContent = `${capitalize(player)} beats ${capitalize(computer)}! You win!`;
        return divScore.textContent = `Your Score: ${playerScore} 
        Computer Score: ${computerScore}`;
    } else (player === computer)
        divResults.textContent = `It\'s a tie!`;
        return divScore.textContent = `Your Score: ${playerScore} 
        Computer Score: ${computerScore}`;
};

// Computer's Choice
function computerPlay() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerSelection;
};

// Capitalization
function capitalize (string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
};

// Starts Over
function playAgain() {
    body.removeChild(buttons);

    const question = document.createElement('div');
    body.appendChild(question);
    question.classList.add('question');
    question.textContent = 'Do you want to play again?'


    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    body.appendChild(buttonDiv);

    const restartButton = document.createElement('button');
    buttonDiv.appendChild(restartButton);
    restartButton.classList.add('restart');
    restartButton.innerHTML = 'Hell yeah!';

    restartButton.addEventListener ('click', () => {
        startOver();
        body.removeChild(question);
        buttonDiv.removeChild(restartButton);
        body.removeChild(text);
        body.removeChild(buttonDiv);
    });
}

function startOver() {
    text.removeChild(divScore);
    text.removeChild(divResults);
    body.appendChild(buttons);
    computerScore = 0;
    playerScore = 0;
};