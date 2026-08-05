// Create function to get computer choice //

let computerChoice, humanChoice;
let humanScore = 0;
let computerScore = 0;

playGame(5)

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
        console.log ("It's a tie!")
    }
    else if ((computerChoice === "rock" && humanChoice === "paper") || 
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "rock")) {
                console.log (`You win! ${humanChoice} beats ${computerChoice}!`)
                ++humanScore;
            }
    else {
        console.log (`You lose! ${computerChoice} beats ${humanChoice}!`)
        ++computerScore
    }

}

function playGame (numOfRounds) {
    for (i = 0; i < numOfRounds; ++i) {
        getComputerChoice ()
        getHumanChoice ()
        playRound (computerChoice, humanChoice)
        console.log (`Scores: Human ${humanScore}, Computer ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log("Human wins!")
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins!")
    }
    else {
        console.log("It's a tie!")
    }
}