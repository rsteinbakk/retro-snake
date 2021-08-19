let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  // console.log(e);
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;

  return inputDirection;
}


document.addEventListener("touchstart", startTouch, false);
  document.addEventListener("touchmove", moveTouch, false);

  // Swipe Up / Down / Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
    // e.preventDefault();
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        console.log("swiped left");
          if (lastInputDirection.x !== 0) return;
          inputDirection = { x: -1, y: 0 }          
          
      } else {
        // swiped right
        console.log("swiped right");
        if (lastInputDirection.x !== 0) return;
          inputDirection = { x: 1, y: 0 };
      }  
    } else {
      // sliding vertically
      if (diffY > 0) {
        // swiped up
        console.log("swiped up");
        if (lastInputDirection.y !== 0) return;
        inputDirection = { x: 0, y: -1 };
      } else {
        // swiped down
        console.log("swiped down");
        if (lastInputDirection.y !== 0) return;
          inputDirection = { x: 0, y: 1 };
      }  
    }

    initialX = null;
    initialY = null;

    // e.preventDefault();
  };