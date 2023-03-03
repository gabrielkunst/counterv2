"use strict";

window.addEventListener("DOMContentLoaded", loadScore);

const btnIncrease = document.querySelector("#btnIncrease");
const btnReset = document.querySelector("#btnReset");
const btnDecrease = document.querySelector("#btnDecrease");
const scoreEl = document.querySelector("#score");
let score;

const increase = function () {
  score++;
  setDisplay();
  verifyNumber();
  setStorage(score);
};
const decrease = function () {
  score--;
  setDisplay();
  verifyNumber();
  setStorage(score);
};
const reset = function () {
  score = 0;
  setDisplay();
  verifyNumber();
  setStorage(score);
};

function loadScore() {
  score = window.localStorage.getItem("number");
  setDisplay();
  verifyNumber();
}

function setColor(color) {
  scoreEl.style.color = color;
}

function setStorage(value) {
  window.localStorage.setItem("number", value);
}

function verifyNumber() {
  if (score > 0) {
    setColor("rgb(0,255,0)");
  } else if (score < 0) {
    setColor("rgb(255,0,0");
  } else {
    setColor("white");
  }
}

function setDisplay() {
  scoreEl.textContent = score;
}

btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
btnReset.addEventListener("click", reset);
