'use strict';

const USER_NAME = prompt("What is your name?");

alert(`Hello, ${USER_NAME}`);
yearCalculator();

function yearCalculator (errorMessage = '') {
  const USER_BIRTHDATE = prompt(`Your birth year?${errorMessage}`);
  const CURRENT_YEAR = new Date().getFullYear();

  if (+USER_BIRTHDATE >= 1900 && CURRENT_YEAR - +USER_BIRTHDATE >= 18) {
    alert(`You are ${CURRENT_YEAR - +USER_BIRTHDATE} years old. Ok, you can read the article.`);
  }
  else if (CURRENT_YEAR - +USER_BIRTHDATE < 18) {
    alert(`You are too young to view this content. Please come back when you are 18. Your current age is ${CURRENT_YEAR - +USER_BIRTHDATE}.`);
    window.location.href = 'https://www.wikihow.com/Be-Older-Than-Your-Age';
  }
  else {
    yearCalculator(` Please enter a number between 1900 and ${CURRENT_YEAR}`)
  }
}
