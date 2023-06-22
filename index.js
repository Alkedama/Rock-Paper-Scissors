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

function playerSelection() {
    let answer = prompt("You have 5 rounds. Choose Rock, Paper or Scissors");
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
        return "Tie";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "You Lose"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "You Win"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "You Win"
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "Tie"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "You Lose"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "You Lose"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "You Win"
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "Tie"
    } else {
        console.log(`You play ${playerSelection}`);
        console.log(`Opponent plays ${computerSelection}`);
        return "Invalid Input. Try Again.";
    }


}

let winCounter = 0;
let loseCounter = 0;
let tieCounter = 0;

for (let index = 1; index <= 5; index++) {

    let returnPlayRound = playRound(playerSelection(), computerSelection());

    if (returnPlayRound == "Invalid Input. Try Again.") {
        index--;
        console.log(returnPlayRound);
        while (returnPlayRound == "Invalid Input. Try Again.") {
            returnPlayRound = playRound(playerSelection(), computerSelection());
            console.log(returnPlayRound);
        }
    } else if (returnPlayRound == "You Lose") {
        loseCounter++;
        console.log(returnPlayRound);
    } else if (returnPlayRound == "You Win") {
        winCounter++;
        console.log(returnPlayRound);
    } else if (returnPlayRound == "Tie") {
        tieCounter++;
        console.log(returnPlayRound);
    }

    
}
console.log(`You won by ${winCounter} times, lost by ${loseCounter} times and tied by ${tieCounter} times.`);
if (winCounter > loseCounter) {
console.log(`Congratulations! You won by ${winCounter} times.`);
} else if (loseCounter > winCounter) {
console.log(`Sorry, you lost by ${loseCounter} times. Better luck next time.`);
} else {}

