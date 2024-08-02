// Creating Rock Paper Scissors Game in Console

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let rando = Math.random();
    if (rando <= 0.33) {
        return "ROCK";
    } else if (rando <= 0.66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}


function getHumanChoice() {
    let ans = prompt("Choose rock, paper, or scissors!");
    return ans.toUpperCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie!"
    } else if ((humanChoice == "ROCK") && (computerChoice == "PAPER")) {
        computerScore++;
        return "You lose! Rock loses to Paper...";
    } else if ((humanChoice == "ROCK") && (computerChoice == "SCISSORS")) {
        humanScore++;
        return "You win! Rock beats Scissors!";
    } else if ((humanChoice == "PAPER") && (computerChoice == "ROCK")) {
        humanScore++;
        return "You win! Paper beats Rock!";
    } else if ((humanChoice == "PAPER") && (computerChoice == "SCISSORS")) {
        computerScore++;
        return "You lose! Paper loses to Scissors...";
    } else if ((humanChoice == "SCISSORS") && (computerChoice == "PAPER")) {
        humanScore++;
        return "You win! Scissors beats Paper!";
    } else if ((humanChoice == "SCISSORS") && (computerChoice == "ROCK")) {
        computerScore++;
        return "You lose! Scissors loses to Rock...";
    } else {
        computerScore = computerScore + 20;
        return "UH OH";
    }
}


// function playGame() {
//     let humanSel;
//     let compSel;

//     for (let i = 0; i < 5; i++) {
//         humanSel = getHumanChoice();
//         compSel = getComputerChoice();
//         console.log(playRound(humanSel, compSel));
//     }

//     return "Human Score: " + humanScore + " vs Computer Score: " + computerScore;
// }

const container = document.querySelector("#container");
const scoreBoard = document.createElement("p");
scoreBoard.setAttribute("style", "color: blue; background: grey;");
container.appendChild(scoreBoard);
const log = document.createElement("p");
container.appendChild(log);
const winnerBoard = document.createElement("h1");
container.appendChild(winnerBoard);



const buttons = document.querySelectorAll("button");

var endGame = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (endGame) return;
        
        const recentMatch = playRound(button.id, getComputerChoice());
        log.textContent = recentMatch; // Log the result of the round

        scoreBoard.textContent = "My Score: " + humanScore + " vs Computer Score: " + computerScore;

        if (humanScore >= 10 || computerScore >= 10) {
            endGame = true;
            if (humanScore > computerScore) {
                winnerBoard.textContent = "You Win!";
            } else {
                winnerBoard.textContent = "CPU Wins!";
            }
        }
    });
});




 


