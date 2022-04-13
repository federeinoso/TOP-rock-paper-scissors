const CHOICES = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Choose your play! ¿Rock, Paper or Scissors?");

  while (input == null) {
    input = prompt("Please choose one option");
  }
  input = input.toLowerCase();
  let check = validateInput(input);

  while (check == false) {
    input = prompt("Type one of the options");
    while (input == null) {
      input = prompt("Please choose one option");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  const randomNum = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomNum];
}

function validateInput(choice) {
  return CHOICES.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  }
  return "Computer";
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties:", ties);

  if (playerWins > computerWins && playerWins > ties) {
    return console.log("YOU WON THE MATCH!");
  } else if (computerWins > playerWins && computerWins > ties) {
    return console.log("YOU LOOSE THE MATCH!");
  }
  return console.log("YOU TIE!");
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player choice:", playerChoice);
  console.log("Computer choice:", computerChoice);
  console.log(winner, "Won the round");
  console.log("--------------------");
}

game();
