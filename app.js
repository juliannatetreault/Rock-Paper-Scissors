const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreboardDiv = document.querySelector('.scoreboard');
const resultDiv = document.querySelector('.result');
const rockDiv = document.getElementById('R');
const paperDiv = document.getElementById('P');
const scissorsDiv = document.getElementById('S');

function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// getComputerChoice();

function win() {
}

function lose() {
}

function draw() {
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "RS":
        case "PR":
        case "SP":
          win();
          break;
        case "RP":
        case "PS":
        case "SR":
          lose();
          break;
        case "RR":
        case "PP":
        case "SS":
          draw();
          break;
    }
}

// game();

function main() {
  rockDiv.addEventListener('click', function() {
      game('R');
  });

  paperDiv.addEventListener('click', function() {
      game('P');
  });

  scissorsDiv.addEventListener('click', function() {
      game('S');
  });
}

main();