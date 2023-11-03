let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".scoreboard")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")


function gameStart(userChoice){
  const computerChoice = pickComputerMove();

  let result = '';

  if (userChoice === 'rock') {
    if (computerChoice === 'rock') {
      result = 'Tie.';
    } else if (computerChoice === 'paper') {
      result = 'You Lose.';
    } else if (computerChoice === 'scissors') {
      result = 'You Win!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You Win!';
    } else if (computerChoice === 'paper') {
      result = 'Tie.';
    } else if (computerChoice === 'scissors') {
      result = 'You Lose.';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = 'You Lose.';
    } else if (computerChoice === 'paper') {
      result = 'You Win!';
    } else if (computerChoice === 'scissors') {
      result = 'Tie.';
    }
  }

  if(result === "You Win!"){
    userScore++;
    userScore_span.innerHTML = userScore;

  } else if (result === 'You Lose.') {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
  }

  /*document.querySelector(result_p.innerHTML)(`You picked ${userChoice}. Computer picked ${computerChoice}. ${result}`);*/
  /*result_p.innerHTML = `${(userChoice)} beats ${(computerChoice)}. You Win! :)`;*/
  
  result_p.innerHTML = `You pick ${(userChoice)}. Computer pick ${(computerChoice)}. ${result}`


}

rock_div.addEventListener('click', function(){
  gameStart("rock")
})

paper_div.addEventListener('click', function(){
  gameStart("paper")
})  

scissors_div.addEventListener('click', function(){
  gameStart("scissors")
})

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerChoice = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

function updateScore(){
  document.getElementById('user-score')
}



