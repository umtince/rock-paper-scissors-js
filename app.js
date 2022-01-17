const divYouScore = document.querySelector("#counterYou");
const divComputerScore = document.querySelector("#counterComputer");
const commentary = document.querySelector("#commentary");
commentary.style.cssText = "position: absolute; left: 0; right: 0; text-align: center; font-size: 25px"
const rps = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

function computerPlay()
{
    let num = Math.floor(((Math.random() * 10) % 3) + 1);

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

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === "Rock" && computerSelection === "Scissors"
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper")
    {
        divYouScore.innerText = ++playerScore;
        commentary.innerText = `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === computerSelection)
    {
        commentary.innerText = "It's a tie";
    }
    else
    {
        divComputerScore.innerText = ++computerScore;
        commentary.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    isGameOver();
}

function gameOver()
{
    if(playerScore > computerScore)
    {
        alert("You Won!");
    }
    else
    {
        alert("Computer Won!");
    }

    //reloads page when game is over
    window.location.reload();
}

function isGameOver()
{
    console.log([playerScore,computerScore])
    if(playerScore === 5 || computerScore === 5)
    {
        rps.forEach(element => {
            element.disabled = true;
        })
        setTimeout(gameOver,1000);
    }
}

rps[0].addEventListener("click", () => {
    playRound("Rock",computerPlay());
});

rps[1].addEventListener("click", () => {
    playRound("Paper",computerPlay());
});

rps[2].addEventListener("click", () => {
    playRound("Scissors",computerPlay());
});