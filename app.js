let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreboardDiv = document.querySelector('.scoreboard');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('R');
const paperDiv = document.getElementById('P');
const scissorsDiv = document.getElementById('S');

function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'R') return "Rock";
    if (letter === 'P') return "Paper";
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose.`;
}

function draw(userChoice, computerChoice) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)} to ${convertToWord(computerChoice)}. It's a draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "RS":
        case "PR":
        case "SP":
          win(userChoice, computerChoice);
          break;
        case "RP":
        case "PS":
        case "SR":
          lose(userChoice, computerChoice);
          break;
        case "RR":
        case "PP":
        case "SS":
          draw(userChoice, computerChoice);
          break;
    }
}

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