const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

const label = document.querySelector(".label");
const playerScoreLabel = document.querySelector(".player-score");
const computerScoreLabel = document.querySelector(".computer-score");

const PLAYER_WIN = "Player wins!";
const COMPUTER_WIN = "Computer wins!";

const ROCK_PAPER = "You lose! Paper beats Rock";
const ROCK_SCISSORS = "You win! Rock beats Scissors";
const ROCK_ROCK = "Draw!";

const PAPER_PAPER = "Draw!";
const PAPER_SCISSORS = "You lose! Scissors beats Paper";
const PAPER_ROCK = "You win! Paper beats Rock";

const SCISSORS_PAPER = "You win! Scissors beats Paper";
const SCISSORS_SCISSORS = "Draw!";
const SCISSORS_ROCK = "You lose! Rock beats Scissors";

const INVALID = "Invalid choice!";

const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if(playerChoice === "ROCK") {
        if(computerChoice === "ROCK") {
            label.textContent = (ROCK_ROCK);
        } else if(computerChoice === "PAPER") {
            label.textContent = (ROCK_PAPER);
            computerScore++;
        } else {
            label.textContent = (ROCK_SCISSORS);
            playerScore++;
        };
    } else if(playerChoice === "PAPER") {
        if(computerChoice === "ROCK") {
            label.textContent = (PAPER_ROCK);
            playerScore++;
        } else if(computerChoice === "PAPER") {
            label.textContent = (PAPER_PAPER);
        } else {
            label.textContent = (PAPER_SCISSORS);
            computerScore++;
        };
    } else if(playerChoice === "SCISSORS") {
        if(computerChoice === "ROCK") {
            label.textContent = (SCISSORS_ROCK);
            computerScore++;
        } else if(computerChoice === "PAPER") {
            label.textContent = (SCISSORS_PAPER);
            playerScore++;
        } else {
            label.textContent = (SCISSORS_SCISSORS);
        };
    } else {
        label.textContent = (INVALID);
    };

    playerScoreLabel.textContent = playerScore;
    computerScoreLabel.textContent = computerScore;
};

function getComputerChoice(options) {
    let rand = parseInt(Math.random() * options.length);
    return options[rand];
};

function declareWinner() {
    if(playerScore > computerScore) {
        label.textContent = (PLAYER_WIN);
    } else {
        label.textContent = (COMPUTER_WIN);
    };
};

rockButton.addEventListener("click", () => {
    playRound(ROCK, getComputerChoice(computerOptions));
    if(playerScore >= 5 || computerScore >= 5) {
        declareWinner();
    };
});
paperButton.addEventListener("click", () => {
    playRound(PAPER, getComputerChoice(computerOptions));
    if(playerScore >= 5 || computerScore >= 5) {
        declareWinner();
    };
});
scissorsButton.addEventListener("click", () => {
    playRound(SCISSORS, getComputerChoice(computerOptions));
    if(playerScore >= 5 || computerScore >= 5) {
        declareWinner();
    };
});

playerScoreLabel.textContent = 0;
computerScoreLabel.textContent = 0;