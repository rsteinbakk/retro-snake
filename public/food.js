import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food = getRandomFoodPosition();
const EXPANSION_RATE = 8;
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}



export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");

  // const foodElement = document.createElement("div");
  // foodElement.style.gridRowStart = food.y;
  // foodElement.style.gridColumnStart = food.x;
  // foodElement.classList.add("food");
  
  // const imageElement = document.createElement("img");
  // imageElement.src ="apple.png"
  // imageElement.id = "#images"

  // foodElement.appendChild(imageElement);
  

  gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
