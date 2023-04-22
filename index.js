let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  //   console.log(computerGuess);

  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

const easyMode = () => {
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  maxGuess = 5;
  startGame();
};

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //check value is low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "YourGuess is HIGH";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is LOW";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "It is Correct";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `U Loose!! Correct number was ${computerGuess} `;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `U Loose!! Correct number was ${computerGuess} `;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "It is correct";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const newGameBegin = () => {
  window.location.reload();
};
