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

function getHumanChoice() {
    let choice = prompt("your choice").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        console.log("invalid input");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("both chose rock thus no one wins.");
                    break;
                case "paper":
                    console.log("computer wins with paper over rock.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("human wins with rock over scissors");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("human wins with paper over rock.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("both chose paper thus no one wins.");
                    break;
                case "scissors":
                    console.log("computer wins with scissors over paper.");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("computer wins with rock over scissors.");
                    computerScore++;
                    break;
                case "paper":
                    console.log("human wins with scissors over paper.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("both chose scissors thus no one wins.");
                    break;
            }
    }
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`);
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
}

playGame(5);