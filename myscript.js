/* I started with the computerPlay function.
I started by making an array of the choices, 
and then used the Math.floor and Math.random
methods to pick a random object from that array. 
The random object is returned and then logged. */

function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randomChoice;
}
console.log(computerPlay());
console.log(typeof computerPlay);

function oneGame() {
let playerSelection = window.prompt('You\'re playing Rock, Paper, Scissors! Choose your fighter!');
playerSelection = playerSelection.toLowerCase();
return playerSelection;
}
console.log(oneGame());

/*
function singleGame() {
    if (playerSelection.toLowerCase ===  "rock" && computerPlay() === "paper")
}
console.log(playerSelection);
/*
function singleRound(playerSelection, computerSelection) {
}

*/ 

/* Write a function that plays a single round of RPS. 
The function should take two parameters (playerSelection
    and computerSelection) and return a string that declares
    the winner of the round like so:"You lose! Paper beats rock." 
    
To-Do:
1. Create variable for playerSelection and assign.
2. Create variable for computerSelection and assign.
3. Compare playerSelection to computerSelection using and if...else function.
Rock > Scissors
Scissors > Paper
Paper > Rock

    */