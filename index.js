'use strict';

let getComputerChoice = () => {
    let min = 1;
    let max = 3;
    let mathRandom = Math.random();
    let random = Math.floor(mathRandom * (max - min + 1) + min);

    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerSelection(){
    let answer = prompt("Choose Rock, Paper or Scissors");
    let trueAnswer = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();

    return trueAnswer;
}

let computerSelection = () => {
    let min = 1;
    let max = 3;
    let mathRandom = Math.random();
    let random = Math.floor(mathRandom * (max - min + 1) + min);

    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("Tie");
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("You lose");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("You win");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("You win");
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("Tie");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("You lose");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("You lose");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("You win");
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("Tie");
    } else {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        console.log("Invalid Input. Play again.");
        playRound();
       
    }

   

}

playRound(playerSelection(), computerSelection());

// console.log(playRound("rock", getComputerChoice()));

// console.log(getComputerChoice());

let game = () => {
    playerSelection();
}

// game();