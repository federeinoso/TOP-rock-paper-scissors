//GENERAL VARIABLES
const CHOICES = ["rock", "paper", "scissors"];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let tie = 0;

//COMPUTER CHOICE
function computerChoice() {
  const randomNum = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomNum];
}

//BUTTONS LISTENERS - PLAYER SELECTION
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

//GAME FUNCTION
function playRound(playerSelection) {
  let computerSelection = computerChoice();
  let winner = document.getElementById("winner");
  let choiceC = document.getElementById("choiceC");
  let choiceP = document.getElementById("choiceP");
  let pointsP = document.getElementById("playerScore");
  let pointT = document.getElementById("tie");
  let pointsC = document.getElementById("computerScore");

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    pointsP.textContent = `score: ${playerScore}`;
    choiceC.textContent = `${computerSelection}`;
    choiceP.textContent = `${playerSelection}`;

    if (playerScore == 5) {
      winner.textContent = "you win";
      document.body.style.backgroundColor = "#32a852";
      disableButton();
    }
  } else if (playerSelection == computerSelection) {
    tie += 1;
    pointT.textContent = `tie: ${tie}`;
    choiceC.textContent = `${computerSelection}`;
    choiceP.textContent = `${playerSelection}`;
  } else {
    computerScore += 1;
    pointsC.textContent = `score: ${computerScore}`;
    choiceC.textContent = `${computerSelection}`;
    choiceP.textContent = `${playerSelection}`;
    if (computerScore == 5) {
      winner.textContent = "you loose";
      document.body.style.backgroundColor = "#a83232";
      disableButton();
    }
  }
  return;
}

//DISABLE BUTTON
const disableButton = (value) => {
  value = true;
  buttons.forEach((button) => {
    button.disabled = value;
  });
  playAgainButton.style.display = "inline";
};

const playAgain = () => {
  location.reload();
};

//PLAY AGAIN BUTTON
const playAgainButton = document.getElementById("playAgain");
playAgainButton.style.display = "none";
playAgainButton.addEventListener("click", () => {
  playAgain();
});
