'use strict';

// generate random num between 0 and 20 on documentload
const randomNum = Math.trunc(Math.random() * 20 + 1);
console.log(randomNum);
// Hidden Number
const hiddenNumber = document.getElementById('random--number');

// get user input
const userGuess = document.getElementById('user--guess');
const checkUserGuess = document.getElementById('check--user--guess');
const text = document.getElementById('text');

checkUserGuess.addEventListener('click', function(e) {
  e.preventDefault();
  //   comvert user input to Number
  const guess = Number(userGuess.value);
  userGuess.blur();
  //   clear input field
  userGuess.value = '';

  //check if number is between 0 and 20 and === generated number
  if (guess > 0 && guess < 20) {
    if (guess === randomNum) {
      text.textContent = '🏆 Correct Number!';
      hiddenNumber.textContent = randomNum;
    } else if (guess > randomNum) {
      text.textContent = 'Too High!';
    } else if (guess < randomNum) {
      text.textContent = 'Too Low!';
    }
  }
});
