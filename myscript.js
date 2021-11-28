const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        playRound();
    });
}
);

let playerScore = 0;
let computerScore = 0;

function playRound(computer, player) {
    computer = computerPlay();
    player = playerPlay();

    function computerPlay() {
        let computerChoices = ['rock', 'paper', 'scissors'];
        let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        return computerSelection;
    }

    function playerPlay() {
        if ((player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')) {
            computerScore++;
            return '`${computerFinal} beats ${playerFinal}`! You lose!';
        } else if ((player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'rock' && computer === 'scissors')) {
            playerScore++;
            return '`${playerFinal}` beats ${computerFinal}`! You win!';
        } else (player === computer)
            return 'It\'s a tie!';
        };
};

function score() {
    if (playerScore > computerScore) {
        return 'You won!!!!!!!' + '\n Computer Score: ' + computerScore +
            '\n Player Score: ' + playerScore;
    } else if (playerScore == computerScore) {
        return 'It\'s a tie!' + '\n Computer Score: ' + computerScore +
            '\n Player Score: ' + playerScore;
    } else {
        return 'You lost!!!!!!!!' + '\n Computer Score: ' + computerScore +
            '\n Player Score: ' + playerScore;
    }
}

