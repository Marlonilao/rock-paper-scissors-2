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

const start = document.querySelector('.start-button');
const rockbtn = document.querySelector('.rock-button');
const paperbtn =  document.querySelector('.paper-button');
const scissorsbtn = document.querySelector('.scissors-button');
const gameLog = document.querySelector('.game-log');
const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.comp-score');
const btnsContainer = document.querySelector('.buttons-container');


const controller = new AbortController();
start.addEventListener('click', function handler() {
    gameLog.textContent = 'Pick your move! (First to score 5 wins the game.)';
    let user = 0;
    let comp = 0;
    function checkGameOver() {
        if (user === 5 || comp === 5) {
            gameLog.textContent = "Game over! (click refresh if you want to play again.)"
            controller.abort();
            if (user > comp) {
            btnsContainer.innerHTML = "<p>Congrats! You win!<p>";
            } else {
                btnsContainer.innerHTML = "<p>Computer wins :(</p>"
            }
        }
    }
    
    rockbtn.addEventListener('click' , () => {
        const computer = getComputerChoice();
        switch (computer) {
            case 'Rock':
                gameLog.textContent = "Rock vs Rock. It's a tie!";
                break;

            case 'Paper':
                gameLog.textContent = "Rock vs Paper. You lose!";
                comp = comp + 1;
                compScore.textContent = `${comp}`;
                break;

            case 'Scissors':
                gameLog.textContent = "Rock vs Scissors. You win!";
                user = user + 1;
                userScore.textContent =`${user}`;
                break;
       }
       checkGameOver();
    })

    paperbtn.addEventListener('click' , () =>{
        const computer = getComputerChoice();
        switch (computer) {
            case 'Rock':
                gameLog.textContent = "Paper vs Rock. You win!";
                user = user + 1;
                userScore.textContent =`${user}`;
                break;
    
            case 'Paper':
                gameLog.textContent = "Paper vs Paper. It's a tie!";
                break;
    
            case 'Scissors':
                gameLog.textContent = "Paper vs Scissors. You lose!";
                comp = comp + 1;
                compScore.textContent = `${comp}`;
                break;
        }
        checkGameOver();
    })

    scissorsbtn.addEventListener('click' , () => {
        const computer = getComputerChoice();
        switch (computer) {
            case 'Rock':
                gameLog.textContent = "Scissors vs Rock. You lose!";
                comp = comp + 1;
                compScore.textContent = `${comp}`;
                break;
    
            case 'Paper':
                gameLog.textContent = "Scissors vs Paper. You win!";
                user = user + 1;
                userScore.textContent =`${user}`;
                break;
    
            case 'Scissors':
                gameLog.textContent = "Scissors vs Scissors. It's a tie!";
                break;
        }
        checkGameOver();
    })
},{signal: controller.signal});

