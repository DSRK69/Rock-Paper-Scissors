const PLAYER_WIN = "Player wins!"
const COMPUTER_WIN = "Computer wins!"
const GAME_DRAW = "Game draw!"

const ROCK_PAPER = "You lose! Paper beats Rock";
const ROCK_SCISSORS = "You win! Rock beats Scissors";
const ROCK_ROCK = "Draw!";

const PAPER_PAPER = "Draw!";
const PAPER_SCISSORS = "You lose! Scissors beats Paper";
const PAPER_ROCK = "You win! Paper beats Rock";

const SCISSORS_PAPER = "You win! Scissors beats Paper";
const SCISSORS_SCISSORS = "Draw!";
const SCISSORS_ROCK = "You lose! Rock beats Scissors";

const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;

function playGame(roundNum) {
    let playerChoice;
    let computerChoice;

    for(i = 0; i < roundNum; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice(computerOptions);

        playRound(playerChoice, computerChoice);
    }

    declareWinner(playerScore, computerScore);
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === "ROCK") {
        if(computerChoice === "ROCK") {
            console.log(ROCK_ROCK);
        } else if(computerChoice === "PAPER") {
            console.log(ROCK_PAPER);
            computerScore++;
        } else {
            console.log(ROCK_SCISSORS);
            playerScore++;
        }
    } else if(playerChoice === "PAPER") {
        if(computerChoice === "ROCK") {
            console.log(PAPER_ROCK);
            playerScore++;
        } else if(computerChoice === "PAPER") {
            console.log(PAPER_PAPER);
        } else {
            console.log(PAPER_SCISSORS);
            computerScore++;
        }
    } else if(playerChoice === "SCISSORS") {
        if(computerChoice === "ROCK") {
            console.log(SCISSORS_ROCK);
            computerScore++;
        } else if(computerChoice === "PAPER") {
            console.log(SCISSORS_PAPER);
            playerScore++;
        } else {
            console.log(SCISSORS_SCISSORS);
        }
    } else {
        console.log("Invalid choice")
    }
}

function getPlayerChoice() {
    return prompt("Player choice: ").toUpperCase();
}

function getComputerChoice(options) {
    let rand = parseInt(Math.random() * options.length);

    return options[rand]
}

function declareWinner(player, computer) {
    if(player > computer) {
        console.log(PLAYER_WIN);
    } else if(player < computer) {
        console.log(COMPUTER_WIN);
    } else {
        console.log(GAME_DRAW);
    }
}


playGame(5);