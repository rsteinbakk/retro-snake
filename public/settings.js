const settings = document.querySelector("#start");
const swipe = document.querySelector("#swipe-mobile");
// const startButton = document.getElementById('start-button');

let start = true;
let swipeit = false;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (start) {
      startGame();
    }
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
