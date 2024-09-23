// VARIABLES
  // BUTTONS
let button0 = document.getElementById("button0");

// Text
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let result = document.getElementById("result");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");


 // Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;


//PROCESS
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer ();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  evaluateResult();
  showPlayerScore();
  showAiScore();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixForAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
}
function evaluateResult() {
  if (playerRoll > aiRoll) {
    result.innerHTML = "Player wins!"
    playerScore++;
  }
  else if (aiRoll > playerRoll) {
    result.innerHTML = "Ai Wins!"
    aiScore++;
}
  else {

  }

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}

function showAiRollResult() {
  aiRollText.innerHTML = aiRoll;
}
function showPlayerScore() {
    playerScoreText.innerHTML = "Player Score: " + playerScore;
}
function showAiScore() {
  aiScoreText.innerHTML = "Ai Score: " + aiScore;
}



