const buttons = document.querySelectorAll('.selections')
const rk = document.querySelector('#rock')
const ppr = document.querySelector('#paper')
const scr = document.querySelector('#scissor')
const result = document.querySelector('.result')
const score = document.querySelector('.score')
const play = document.querySelector('.play')
const reset = document.querySelector('.reset')

let playerInput;

let p1Score = 0;
let p2Score = 0;

const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

const p1Win = "Player won!";
const p2Win = "Computer won!";
const tie = "Tie!";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerInput = button.getAttribute('id')
    })
})

function playerPlay() {
    return playerInput;
}

function computerPlay() {
    computerInput = Math.floor(Math.random() * (3) + 1);
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

function scoreReset() {
    p1Score = 0;
    p2Score = 0;
    result.textContent = null
    score.textContent = `Player Score: ${p1Score} Computer Score: ${p2Score}`
}

function addResult(winner) {
    result.textContent = winner;
}

function updateScore() {
    score.textContent = `Player Score: ${p1Score} Computer Score: ${p2Score}`
    if (p1Score == 5) {
        score.textContent = `Player is the winner!`
        play.textContent = 'Play more?'
    }
    if (p2Score == 5) {
        score.textContent = 'Computer is the winner!'
        play.textContent = 'Play more?'
    }
}

// plays a single round
function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (!playerSelection) {
        result.textContent = 'Please choose an option'
        return
    }
    if (playerSelection === rock && computerSelection === scissor) {
        p1Score++;
        addResult(p1Win)
    } else if (playerSelection === rock && computerSelection === paper) {
        p2Score++;
        addResult(p2Win);
    } else if (playerSelection === paper && computerSelection === rock) {
        p1Score++;
        addResult(p1Win);
    } else if (playerSelection === paper && computerSelection === scissor) {
        p2Score++;
        addResult(p2Win);
    } else if (playerSelection === scissor && computerSelection === paper) {
        p1Score++;
        addResult(p1Win);
    } else if (playerSelection === scissor && computerSelection === rock) {
        p2Score++;
        addResult(p2Win);
    } else if (playerSelection === computerSelection) {
        addResult(tie);
    }
}

play.addEventListener('click', () => {
    playRound()
    updateScore()
})

reset.addEventListener('click', () => {
    scoreReset()
})

// plays 5 rounds
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     if (p1Score > p2Score) {
//         return p1Win;
//     }
//     else if (p1Score < p2Score) {
//         return p2Win;
//     }
//     else {
//         return tie;
//     }
// }