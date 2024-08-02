'use strict';

document.addEventListener("DOMContentLoaded", function() {
  if (document.visibilityState === 'visible') {
    startApp();
  } else {
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }
});

function handleVisibilityChange() {
  if (document.visibilityState === 'visible') {
    startApp();
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  }
}

function startApp() {
  const USER_NAME = prompt("What is your name?");
  alert(`Hello, ${USER_NAME}`);

  const SIDE_LENGTH = prompt("Enter the side length of the square to get the perimeter.");
  if (SIDE_LENGTH * 1 === +SIDE_LENGTH) {
    alert(`The perimeter of a square with side ${SIDE_LENGTH} is ${SIDE_LENGTH * 4} units.`);
  } else {
    alert(`Don't play with me. ${SIDE_LENGTH} is not a number!`);
  }

  yearCalculator();
}

function yearCalculator(errorMessage = '') {
  const USER_BIRTHDATE = prompt(`Your birth year?${errorMessage}`);
  const CURRENT_YEAR = new Date().getFullYear();

  if (+USER_BIRTHDATE >= 1900 && CURRENT_YEAR - +USER_BIRTHDATE >= 18) {
    alert(`You are ${CURRENT_YEAR - +USER_BIRTHDATE} years old. Ok, you can read the article.`);
  } else if (CURRENT_YEAR - +USER_BIRTHDATE < 18) {
    alert(`You are too young to view this content. Please come back when you are 18. Your current age is ${CURRENT_YEAR - +USER_BIRTHDATE}.`);
    window.location.href = 'https://www.wikihow.com/Be-Older-Than-Your-Age';
  } else {
    yearCalculator(` Please enter a number between 1900 and ${CURRENT_YEAR}`);
  }
}
