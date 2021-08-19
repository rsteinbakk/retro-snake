import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  totalScoreExport,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let SNAKE_SPEED = 3;
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("gameboard");
const gameOverElement = document.getElementById("game-over");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

easy.addEventListener("click", function () {
  SNAKE_SPEED = 2;
  startGame();
});
medium.addEventListener("click", function () {
  SNAKE_SPEED = 5;
  startGame();
});
hard.addEventListener("click", function () {
  SNAKE_SPEED = 10;
  startGame();
});
  
function main(currentTime) {
  if (gameOver) {
    gameOverElement.style.visibility = "visible";
    var h = document.createElement("H3");
    var t = document.createTextNode(
      "Du fikk " + totalScoreExport() + " poeng 🐍"
    );
    h.appendChild(t);
    gameOverElement.appendChild(h);
    // setTimeout(() => {
    //   window.location = "/";
    // }, 3000);

    // if (confirm("Game Over. Trykk ok for å prøve igjen")) {

    // }
    return;
  }
  window.requestAnimationFrame(main);
  const secoundsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secoundsSinceLastRender < 1 / SNAKE_SPEED) return;

  //   console.log("Render");
  lastRenderTime = currentTime;

  update();
  draw();
}

const startOverElement = document.getElementById("start-over"); 
startOverElement.addEventListener("click", function startOver() {
  window.location = "index.html";
})

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}


const settings = document.querySelector("#start");
const swipe = document.querySelector("#swipe-mobile");
const startButton = document.getElementById('start-button');

let start = true;
let swipeit = false;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (start) {
      startGame();
    }
  }
});
startButton.addEventListener("click", function (e) {
    if (start) {
      startGame();
    }
});
function startGame() {
  settings.remove();
  start = false;
  swipe.style.visibility = "visible";
  setTimeout(() => {
    swipeit = true;
  }, 100);
}

function removeSwipe() {
  if (swipeit === true) {
    swipe.remove();
  }
}

document.addEventListener("click", function (e) {
  removeSwipe();
});
document.addEventListener("keypress", function (e) {
  removeSwipe();
});
