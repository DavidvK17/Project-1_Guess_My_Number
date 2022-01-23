'use strict';

// generate random num between 0 and 20 on documentload
const randomNum = Math.trunc(Math.random() * 20 + 1);
console.log(randomNum);

// get user input
const userGuess = document.getElementById('user--guess');
const checkUserGuess = document.getElementById('check--user--guess');

checkUserGuess.addEventListener('click', function(e) {
  e.preventDefault();
  //   comvert user input to Number
  Number(userGuess.value);
  userGuess.blur();
  //   clear input field
  userGuess.value = '';
});
