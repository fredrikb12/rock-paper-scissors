let computerScore = 0;
let playerScore = 0;
let gameOver = false;

//Create a variable optionNum at random between 0-2
//create an array options containing rock, paper, scissors
//return the option corresponding to optionNum
function computerPlay () {
    let optionNum = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[optionNum];
}
//hellishly ugly function
//player and computer are set to chosen options and properly capitalized (Rock, Paper, Scissors) to avoid any case sensitivity issues
//the rest is just checks for who wins
function playRound(playerSelection, computerSelection) {
    if(gameOver) {
        alert("Game is over, please reload to play again.");
        return;
    }

    let player = properlyCapitalize(playerSelection);
    let computer = properlyCapitalize(computerSelection);
    const playerScoreText = document.querySelector("p#player");
    const computerScoreText = document.querySelector("p#computer");

    if (player === computer) {
        return "It's a tie!";
    } else if (player === "Rock") {
        if (computer === "Paper") {
            computerScore++;
            updateScore(computerScore, computerScoreText, "computer");
            return `Computer wins! ${computer} beats ${player}`;
        } else {
            playerScore++;
            updateScore(playerScore, playerScoreText, "player");
            return `Player wins! ${player} beats ${computer}`;
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            playerScore++;
            updateScore(playerScore, playerScoreText, "player");
            return `Player wins! ${player} beats ${computer}`;
        } else {
            computerScore++;
            updateScore(computerScore, computerScoreText, "computer");
            return `Computer wins! ${computer} beats ${player}`;
        }
    }
    else if (player === "Scissors") {
        if(computer === "Rock") {
            computerScore++;
            updateScore(computerScore, computerScoreText, "computer");
            return `Computer wins! ${computer} beats ${player}`;
        } else {
            playerScore++;
            updateScore(playerScore, playerScoreText, "player");
            return `Player wins! ${player} beats ${computer}`
        }
    } else {
        return "Incorrect selection."
    }
}

function properlyCapitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}

let buttons = document.querySelectorAll(".btn");

console.log(buttons);
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const resultHeader = document.querySelector(".results > h1");
        resultHeader.textContent = "Round result: " + (playRound(button.id, computerPlay()));
        if(resultHeader.textContent === "Round result: undefined") {
            resultHeader.textContent = "Game Finished";
        }
    });
});

function updateScore(score, targetElement, player) {
    if(score >= 5) {
        endGame(targetElement, score, player);
        return;
    }
    if(player === "player") {
        targetElement.textContent = `Player score: ${score}`;
    } else {
        targetElement.textContent = `Computer score: ${score}`;
    }
}

function endGame(targetElement, score, player) {
    targetElement.textContent = `${player} won! score: ${score}`;
    gameOver = true;
}