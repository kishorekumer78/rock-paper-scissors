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

const startGame = () => {
  let userWin = 0;
  let compWin = 0;
  let draw = 0;
  for (let i = 1; i <= 5; i++) {
    let userInput = prompt("Choose from rock/paper/scissors");
    console.log(`User no ${i}:  ${userInput}`);
    let compInput = getComputerChoice();
    console.log(`Computer no ${i}:  ${compInput}`);
    if (getResult(userInput, compInput) === "user") {
      userWin = userWin + 1;
      console.log("User Wins");
    } else if (getResult(userInput, compInput) === "computer") {
      compWin = compWin + 1;
      console.log("Computer Wins");
    } else if (getResult(userInput, compInput) === "draw") {
      draw = draw + 1;
      console.log("Draw");
    }
  }
  if (userWin > compWin) {
    console.log("Winner : User");
  } else if (compWin > userWin) {
    console.log("Winner : Computer");
  } else {
    console.log("Match Draw!");
  }
};

startGame();
