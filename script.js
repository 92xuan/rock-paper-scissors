// Create function to get computer choice //

let computerChoice, humanChoice;
let humanScore = 0;
let computerScore = 0;
let gameRunning = true;

const scoreDisplay = document.querySelector(".scoreDisplay")
const roundDisplay = document.querySelector(".roundDisplay")
const winnerDisplay = document.querySelector(".winnerDisplay")

// playGame(1)

function getComputerChoice () {
    let choiceNum = Math.random();
    if (choiceNum <= 1/3 ) {
        computerChoice = "rock"
    }
    else if (choiceNum <= 2/3) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
}

function getHumanChoice () {
    humanChoice = prompt('Please enter "rock", "paper", or "scissors"')
}

function playRound (computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === humanChoice) {
        roundDisplay.textContent = "It's a tie!"
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") || 
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "rock")) {
                roundDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
                ++humanScore;
            }
    else {
        roundDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`
        ++computerScore
    }
    scoreDisplay.textContent = `SCORE: Human ${humanScore}, Computer ${computerScore}`
    if (humanScore == 5) {
        winnerDisplay.textContent = "YOU WIN!"
        gameEnd()
    } else if  (computerScore == 5) {
        winnerDisplay.textContent = "YOU LOSE! BETTER LUCK NEXT TIME!"
        gameEnd()
    }
}

const gameEnd = () => {
    gameRunning = false
    const resetButton = document.createElement("button")
    resetButton.textContent = "Play again"
    resetButton.addEventListener('click', gameReset)
    winnerDisplay.appendChild(resetButton)
}

const gameReset = () => {
    gameRunning = true
    humanScore = 0
    computerScore = 0
    scoreDisplay.textContent = ""
    roundDisplay.textContent = ""
    winnerDisplay.textContent = ""
}

const buttonsDiv = document.querySelector(".buttonsDiv")
buttonsDiv.addEventListener('click', (event) => {
    if (gameRunning) {
    let buttonClicked = event.target
        switch (buttonClicked.className) {
            case "rockBtn":
                humanChoice = "rock"
            case "scissorsBtn":
                humanChoice = "scissors"
            case "paperBtn":
                humanChoice = "paper"
        }
        getComputerChoice ()
        playRound(computerChoice, humanChoice)
    }
})