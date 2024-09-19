// VARIABLES
  // BUTTONS
let button0 = document.getElementById("button0");

// Text
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let

// Data
let playerRoll = 0;
let aiRoll = 0;

//PROCESS
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer ();
  showPlayerRollResult ();
  showAiRollResult
})

// CONTROLLERS
function getRandomNumberOneToSixForPlayer () {
  playerRoll = Math.floor(Math.random() * 6) +1;
}

// VIEWS
function showPlayerRollResult () {
  playerRollText.innerHTML = playerRoll;
}
