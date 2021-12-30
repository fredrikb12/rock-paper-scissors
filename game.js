//Create a variable optionNum at random between 0-2
//create an array options containing rock, paper, scissors
//return the option corresponding to optionNum
function computerPlay () {
    let optionNum = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[optionNum];
}

function playRound(playerSelection, computerSelection) {
    
}