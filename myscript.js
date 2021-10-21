/* Begin with function called computerPlay that will randomly
return Rock, Paper, or Scissors */

function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randomChoice;
}
console.log(computerPlay());
/* Write a function that plays a single round of RPS. 
The function should take two parameters (playerSelection
    and computerSelection) and return a string that declares
    the winner of the round like so:"You lose! Paper beats rock." */