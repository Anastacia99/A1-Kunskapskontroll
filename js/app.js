// VARIABLES
  // BUTTONS
let button0 = document.getElementById("button0");

// Text
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("Result");
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
  getRandomNumberOneToSixForAi();
  evaluateResult();
  showPlayerRollResult();
  showAiRollResult();
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
    resultText.innerHTML = "Player wins!";
    playerScore++;
  } else if (aiRoll > playerRoll) {
    resultText.innerHTML = "AI Wins!";
    aiScore++;
  } else {
    resultText.innerHTML = "It's a draw!";
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = "Player result: " + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerHTML = "AI result: " + aiRoll;
}
function showPlayerScore() {
    playerScoreText.innerHTML = "Player Score: " + playerScore;
}
function showAiScore() {
  aiScoreText.innerHTML = "AI Score: " + aiScore;
}





