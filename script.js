'use strict';

const USER_NAME = prompt("What is your name?");

alert(`Hello, ${USER_NAME}`);

yearCalculator();

function yearCalculator (errorMessage = '') {
  const USER_BIRTHDATE = prompt(`Your birth year?${errorMessage}`);
  const CURRENT_YEAR = new Date().getFullYear();

  if (USER_BIRTHDATE === `2001`) {
    alert(`${USER_BIRTHDATE} is a good year!`);
  }
  else {
    yearCalculator(` Please enter a number between 1900 and ${CURRENT_YEAR}`)
  }
}