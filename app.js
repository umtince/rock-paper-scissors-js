function computerPlay()
{
    let num = randomNumber();

    switch(num)
    {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            console.log("num is not between 1-3 (function computerPlay)");
    }
}

function randomNumber()
{
    return Math.floor(((Math.random() * 10) % 3) + 1);
}

function playRound(playerSelection, computerSelection, playerScore, computerScore)
{
    const playerSelectionAdjusted = playerSelection.toLowerCase();
    const computerSelectionAdjusted = computerSelection.toLowerCase();

    let isWon;

    if(playerSelectionAdjusted === "rock" && computerSelectionAdjusted === "scissors"
    || playerSelectionAdjusted === "paper" && computerSelectionAdjusted === "rock"
    || playerSelectionAdjusted === "scissors" && computerSelectionAdjusted === "paper")
    {
        isWon = 1;
    }
    else if(playerSelectionAdjusted === computerSelectionAdjusted)
    {
        isWon = 2; //tie
    }
    else
    {
        isWon = 0;
    }


    if(isWon === 1)
    {
        commentary.textContent = `You Won! ${playerSelectionAdjusted} beats ${computerSelectionAdjusted}`;
        playerScore++;
        divYouScore.textContent = playerScore;
        
        return [playerScore,computerScore];
    }
    else if(isWon == 2)
    {
        commentary.textContent = "It's a tie";
        computerScore++;
        divComputerScore.textContent = computerScore;

        return [playerScore,computerScore];
    }
    else
    {   
        commentary.textContent = `You Lose! ${computerSelectionAdjusted} beats ${playerSelectionAdjusted}`;
        return [playerScore,computerScore];
    }  
    console.log("exit"); 
}

let playerScore = 0;
let computerScore = 0;
let arrayOfScores;
const rps = document.querySelectorAll("button");

rps[0].addEventListener("click", () => {
    arrayOfScores = playRound("rock",computerPlay(),playerScore,computerScore);
    playerScore = arrayOfScores[0];
    computerScore = arrayOfScores[1];
});

rps[1].addEventListener("click", () => {
    arrayOfScores = playRound("paper",computerPlay(),playerScore,computerScore);
    playerScore = arrayOfScores[0];
    computerScore = arrayOfScores[1];
});

rps[2].addEventListener("click", () => {
    arrayOfScores = playRound("scissors",computerPlay(),playerScore,computerScore);
    playerScore = arrayOfScores[0];
    computerScore = arrayOfScores[1];
});

const divYouScore = document.querySelector("#counterYou");
const divComputerScore = document.querySelector("#counterComputer");
const commentary = document.querySelector("#commentary");
commentary.style.cssText = "text-align:center; margin-top:50px; margin-bottom: 0; font-size: 25px"
