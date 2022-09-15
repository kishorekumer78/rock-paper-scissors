const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const resetBtn = document.querySelector(".resetBtn");

const userRoundResultDisplayer = document.querySelector(".userInput");
const compRoundResultDisplayer = document.querySelector(".compInput");
const roundResultDisplayer = document.querySelector(".roundResult");

const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const drawScore = document.querySelector(".drawScore");
let userWin = 0;
let compWin = 0;
let draw = 0;
playerScore.textContent = userWin;
compScore.textContent = compWin;
drawScore.textContent = draw;
let choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
};

const getResult = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    return "user";
  } else {
    return "computer";
  }
};

const countScore = (result) => {
  if (result === "user") {
    userWin = userWin + 1;
    // update score in ui
    playerScore.textContent = userWin;
  } else if (result === "computer") {
    compWin = compWin + 1;
    // update ui
    compScore.textContent = compWin;
  } else if (result === "draw") {
    draw = draw + 1;
    // update ui
    drawScore.textContent = draw;
  }
};
const playRound = (userInput) => {
  // get computer choice
  let compInput = getComputerChoice();
  compRoundResultDisplayer.textContent = compInput.toUpperCase();

  if (getResult(userInput, compInput) === "user") {
    // action for user win
    roundResultDisplayer.textContent = "YOU WIN!";
    // add 1 to playerWin counter
    countScore("user");
  } else if (getResult(userInput, compInput) === "computer") {
    // action for computer win
    countScore("computer");
    roundResultDisplayer.textContent = "COMPUTER WINS!";
    // add 1 to compWin counter
  } else if (getResult(userInput, compInput) === "draw") {
    // action for draw
    countScore("draw");
    roundResultDisplayer.textContent = "DRAW FOR THIS ROUND!";
  }

  // final result checker
  if (userWin + compWin + draw === 5) {
    if (userWin > compWin) {
      showFinalResult("user");
    } else if (compWin > userWin) {
      showFinalResult("computer");
    } else {
      showFinalResult("draw");
    }
  }
};

const showFinalResult = (winner) => {
  let text = "Result of Game";
  if (winner === "user") {
    text = "Congratulations! You win";
  } else if (winner === "computer") {
    text = "Computer won! Better luck next time";
  } else if (winner === "draw") {
    text = "Game is draw!";
  }
  playerScore.remove();
  compScore.remove();
  drawScore.remove();
  const finalResult = document.createElement("h3");
  finalResult.innerText = text;
  const scoreContainer = document.querySelector(".scoreContainer");
  scoreContainer.textContent = "";
  scoreContainer.appendChild(finalResult);
  resetBtn.style.display = "inline";
};

// startGame();

rockBtn.addEventListener("click", () => {
  userRoundResultDisplayer.textContent = "ROCK";
  playRound("rock");
});
paperBtn.addEventListener("click", () => {
  userRoundResultDisplayer.textContent = "PAPER";
  playRound("paper");
});
scissorBtn.addEventListener("click", () => {
  userRoundResultDisplayer.textContent = "SCISSOR";
  playRound("scissors");
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
