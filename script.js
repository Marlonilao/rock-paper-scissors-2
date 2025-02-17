function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    switch (computerChoice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?: ");
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound() {
        human = getHumanChoice();
        computer = getComputerChoice();
        if (human === "Rock" && computer === "Rock") {
            console.log("Rock vs Rock. It's a tie!")
        } else if (human === "Rock" && computer === "Paper") {
            console.log("Rock vs Paper. You lose!")
            computerScore++
        } else if (human === "Rock" && computer === "Scissors") {
            console.log("Rock vs Scissors. You win!")
            humanScore++
        } else if (human === "Paper" && computer === "Rock") {
            console.log("Paper vs Rock. You win!")
            humanScore++
        } else if (human === "Paper" && computer === "Paper") {
            console.log("Paper vs Paper. It's a tie!")
        } else if (human === "Paper" && computer === "Scissors") {
            console.log("Paper vs Scissors. You lose!")
            computerScore++
        } else if (human === "Scissors" && computer === "Rock") {
            console.log("Scissors vs Rock. You lose!")
            computerScore++
        } else if (human === "Scissors" && computer === "Paper") {
            console.log("Scissors vs Paper. You win!")
            humanScore++
        } else if (human === "Scissors" && computer === "Scissors") {
            console.log("Scissors vs Scissors. It's a tie!")
        }
    }
    
    playRound();
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
    playRound();
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)        
    playRound();
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
    playRound();
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)    
    playRound();
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
}

playGame();