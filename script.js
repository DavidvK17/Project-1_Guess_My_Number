'use strict';

// generate random num between 0 and 20 on documentload
let randomNum = Math.trunc(Math.random() * 20 + 1);

// Hidden Number
const hiddenNumber = document.getElementsByClassName('random--number');

// storing score value
let score = 20;
const displayScore = document.getElementById('score');

// highscore
let highScore = 0;
let displayHighSocre = document.getElementById('highscore');

// get user input
const userGuess = document.getElementById('user--guess');
const checkUserGuess = document.getElementById('check--user--guess');
const text = document.getElementById('text');

checkUserGuess.addEventListener('click', function(e) {
  e.preventDefault();
  //   comvert user input to Number
  const guess = Number(userGuess.value);
  //   clear input field
  userGuess.value = '';

  //check if number is between 0 and 20 and === generated number
  //   countdown score
  if (guess > 0 && guess < 20) {
    if (guess === randomNum) {
      text.textContent = '🏆 Correct Number!';
      hiddenNumber[0].textContent = `${randomNum}`;
      hiddenNumber[0].classList.add('is--correct');
      document.getElementsByTagName('h1')[0].textContent = '🏆 YOU WIN! :)';
    } else if (guess > randomNum) {
      text.textContent = '📉 Too High!';
      calcDispScore();
    } else if (guess < randomNum) {
      text.textContent = '📈 Too Low!';
      calcDispScore();
    }
  }

  //   game over
  if (score === 0) {
    document.getElementsByTagName('h1')[0].textContent = 'GAME OVER :(';
    document.getElementsByTagName('body')[0].style.background =
      'var(--fifth-color)';
    document
      .querySelectorAll('*')
      .forEach(el => (el.style.color = 'var(--sixth-color)'));
  }

  //   update Highscore
  if (guess === randomNum && score > highScore) {
    highScore = score;
    displayHighSocre.textContent = score;
  }

  function calcDispScore() {
    score--;
    displayScore.textContent = `${score}`;
  }
});

// start new game
const newGame = document.getElementById('again');

newGame.addEventListener('click', function(e) {
  score = 20;
  displayScore.textContent = 20;
  document.getElementsByTagName('h1')[0].textContent = 'Guess My Number!';
  document.getElementById('text').textContent = 'Start guessing...';
  randomNum = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNum);
  hiddenNumber[0].textContent = `?`;
  hiddenNumber[0].classList.remove('is--correct');
});
