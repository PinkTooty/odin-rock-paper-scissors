let computerInput;

let p1Score = 0;
let p2Score = 0;

const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

const p1Win = "Player wins!";
const p2Win = "Computer wins!";
const tie = "Tie!";

function getRandomInt() {
    return Math.floor(Math.random() * (3) + 1);
}

function playerPlay() {
    let playerInput = prompt("Please enter either rock, paper, or scissors").toLowerCase();
    if (playerInput === 'scissors') {
        return playerInput = scissor;
    }
    else if (playerInput === '' || playerInput !== rock && playerInput !== paper && playerInput !== scissor) {
        throw 'Please try again!';
    }
    else {
        return playerInput;
    }
}

function computerPlay() {
    computerInput = getRandomInt();
    if (computerInput === 1) {
        return rock;
    }
    if (computerInput === 2) {
        return paper;
    }
    if (computerInput === 3) {
        return scissor;
    }
}
// plays a single round
function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (playerSelection === rock && computerSelection === scissor) {
        p1Score++;
        return p1Win;
    } else if (playerSelection === rock && computerSelection === paper) {
        p2Score++;
        return p2Win;
    }
    if (playerSelection === paper && computerSelection === rock) {
        p1Score++;
        return p1Win;
    } else if (playerSelection === paper && computerSelection === scissor) {
        p2Score++;
        return p2Win;
    }
    if (playerSelection === scissor && computerSelection === paper) {
        p1Score++;
        return p1Win;
    } else if (playerSelection === scissor && computerSelection === rock) {
        p2Score++;
        return p2Win;
    }
    else {
        return tie;
    }
}
// plays 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (p1Score > p2Score) {
        return p1Win;
    }
    else if (p1Score < p2Score) {
        return p2Win;
    }
    else {
        return tie;
    }
}