let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
    }
}

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    addResult("both chose rock thus no one wins.");
                    break;
                case "paper":
                    addResult("computer wins with paper over rock.");
                    computerScore++;
                    break;
                case "scissors":
                    addResult("human wins with rock over scissors");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    addResult("human wins with paper over rock.");
                    humanScore++;
                    break;
                case "paper":
                    addResult("both chose paper thus no one wins.");
                    break;
                case "scissors":
                    addResult("computer wins with scissors over paper.");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    addResult("computer wins with rock over scissors.");
                    computerScore++;
                    break;
                case "paper":
                    addResult("human wins with scissors over paper.");
                    humanScore++;
                    break;
                case "scissors":
                    addResult("both chose scissors thus no one wins.");
                    break;
            }
    }
    score.textContent = `Computer Score: ${computerScore} -- Human Score: ${humanScore}`;
    checkWinner();
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
let score = document.querySelector(".score");
let end = document.querySelector(".end");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent);
    })
})

function addResult(message) {
    const newLine = document.createElement("br");
    results.appendChild(newLine);
    let messageNode = document.createTextNode(message);
    results.appendChild(messageNode);
}

let requiredWins = 5;

function checkWinner() {

    if (humanScore == requiredWins) {
        const newLine = document.createElement("br");
        end.appendChild(newLine);
        let messageNode = document.createTextNode("Human won!");
        end.appendChild(messageNode);
    }

    if (computerScore == requiredWins) {
        const newLine = document.createElement("br");
        end.appendChild(newLine);
        let messageNode = document.createTextNode("Coputer won!");
        end.appendChild(messageNode);
    }
}