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

let computerSelection = () => {
    let min = 1;
    let max = 3;
    let mathRandom = Math.random();
    let random = Math.floor(mathRandom * (max - min + 1) + min);

    // if (random === 1) {
    //     return "Rock";
    // } else if (random === 2) {
    //     return "Paper";
    // } else {
    //     return "Scissors";
    // }

    return "Rock";

}

/* Battle Results */

const resultContainer = document.querySelector(".resultContainer");

const resultSpan = document.createElement("p");
const playerSelectSpan = document.createElement("span");
const computerSelectSpan = document.createElement("span");
const endResultSpan = document.createElement("span");
const roundCounterSpan = document.createElement("span");



resultContainer.appendChild(roundCounterSpan);
let result = resultContainer.appendChild(resultSpan);
let playerSelect = resultContainer.appendChild(playerSelectSpan);
let computerSelect = resultContainer.appendChild(computerSelectSpan);
let endResult = resultContainer.appendChild(endResultSpan);

/* Counters */

let winCounter = 0;
let loseCounter = 0;
let tieCounter = 0;
let roundCounter = 0;

const counterSpan = document.createElement("span");

resultContainer.appendChild(counterSpan);

let playRound = (playerSelection, computerSelection) => {
    roundCounter++;

    if (roundCounter < 5) {
        roundCounterSpan.textContent = `Round ${roundCounter}`;
        roundCounterSpan.appendChild(document.createElement("br"));

        if (playerSelection == "Rock" && computerSelection == "Rock") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `You Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "Tie \r\n";
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "You Lose";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "You Win";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "You Win";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Paper" && computerSelection == "Paper") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "Tie";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "You Lose";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "You Lose";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "You Win";
            result.appendChild(document.createElement("br"));
        } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "Tie";
            result.appendChild(document.createElement("br"));
        } else {
            playerSelect.textContent = `You play ${playerSelection}`;
            playerSelect.appendChild(document.createElement("br"));
            computerSelect.textContent = `Opponent plays ${computerSelection}`;
            computerSelect.appendChild(document.createElement("br"));
            result.textContent = "Invalid Input";
        }

        if (result.textContent == "You Lose") {
            loseCounter++;
        } else if (result.textContent == "You Win") {
            winCounter++;
        } else if (result.textContent == "Tie") {
            tieCounter++;
        }

        counterSpan.textContent = `You won by ${winCounter} times, lost by ${loseCounter} times
         and tied by ${tieCounter} times.`;

    } else {
        if(counterSpan && counterSpan.parentNode && roundCounter === 5){
        resultContainer.removeChild(counterSpan);
        roundCounterSpan.textContent = `Round ${roundCounter}`;
        roundCounterSpan.appendChild(document.createElement("br"));

        if (winCounter > loseCounter) {
            endResult.textContent = `Congratulations! You won by ${winCounter} times, lost by ${loseCounter}
             times and tied by ${tieCounter} times.`;
        } else if (loseCounter > winCounter) {
            endResult.textContent = `Sorry! you lost by ${loseCounter} times, won by ${winCounter}
             times and tied by ${tieCounter} times. Better luck next time.`;
        } else if (loseCounter == winCounter) {
            endResult.textContent = `You tied the game by ${tieCounter} times! won by ${winCounter} times
             and lost by ${loseCounter} times. Try again.`;
        }
    }
    }

}
