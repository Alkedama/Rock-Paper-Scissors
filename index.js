'use strict';

let getComputerChoice = () => {
    let min = 1;
    let max = 3;
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerSelection = () => {
    
}

let computerSelection = () => {

}

let playRound = (playerSelection, computerSelection) => {
    
}

// console.log(playRound("rock", getComputerChoice()));

console.log(getComputerChoice());

let game = () => {
    prompt("Enter rock, paper, or scissors");
}

// game();
