const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissor");
var score = document.getElementById("score");

var userScore = 0;
var computerScore = 0;
var choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

rock.addEventListener("click", function() {
    console.log("Rock button clicked");
    if (getComputerChoice() === "scissors") {
        userScore++;
        result.textContent = "Computer Chose Scissors! You win!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    } else if (getComputerChoice() === "paper") {
        computerScore++;
        result.textContent = "Computer Chose Paper! You lose!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    } else if (getComputerChoice() === "rock") {
        result.textContent = "Computer Chose Rock! It's a tie!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    }
});

paper.addEventListener("click", function() {
    console.log("Paper button clicked");
    if (getComputerChoice() === "rock") {
        userScore++;
        result.textContent = "Computer Chose Rock! You win!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    } else if (getComputerChoice() === "scissors") {
        computerScore++;
        result.textContent = "Computer Chose Scissors! You lose!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    } else if (getComputerChoice() === "paper") {
        result.textContent = "Computer Chose Paper! It's a tie!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    }
});

scissors.addEventListener("click", function() {
    console.log("Scissors button clicked");
    if (getComputerChoice() === "paper") {
        userScore++;
        result.textContent = "Computer Chose Paper! You win!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    } else if (getComputerChoice() === "rock") {
        computerScore++;
        result.textContent = "Computer Chose Rock! You lose!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    } else if (getComputerChoice() === "scissors") {
        result.textContent = "Computer Chose Scissors! It's a tie!";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    }

});
