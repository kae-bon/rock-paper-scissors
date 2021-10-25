/* I started with the computerPlay function.
I started by making an array of the choices, 
and then used the Math.floor and Math.random
methods to pick a random object from that array. 
The random object is returned and then logged. */

let computerScore = 0;
let playerScore = 0;

console.log(playerScore);
console.log(computerScore);

function computerChoice() {
    let choiceOptions = ['rock', 'paper', 'scissors'];
    return choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
}

function playerChoice() {
let playerInput = window.prompt('You\'re playing Rock, Paper, Scissors! Choose your fighter!');
return playerInput.toLowerCase();
}

function game() {
        function playRound(playerSelection, computerSelection) {
            computerSelection = computerChoice();
            playerSelection = playerChoice();
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return 'Paper beats rock! You lose!' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return 'Paper beats rock! You win!' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return 'Scissors beat paper! You lose!' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return 'Paper beats rock! You win!' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return 'Scissors beat paper! You win!' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return 'Rock beats scissors! You lose! ' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;
        } else (playerSelection === computerSelection) 
            return 'It\'s a tie!' + '\n Computer Score: ' + computerScore
            + '\n Player Score: ' + playerScore;
        }
    return playRound();
}

for (i = 1; i <=5; i++) {
    console.log(game());
}

function score() {
    if (playerScore > computerScore) {
        return 'You won!!!!!!!' + '\n Computer Score: ' + computerScore
        + '\n Player Score: ' + playerScore;
    } else if (playerScore == computerScore) {
        return 'It\'s a tie!' + '\n Computer Score: ' + computerScore
        + '\n Player Score: ' + playerScore;
    } else {
        return 'You lost!!!!!!!!' + '\n Computer Score: ' + computerScore
        + '\n Player Score: ' + playerScore;
    }
}

console.log(score());