import { BOARD_SIZE, GROWTH_RATE } from './config.js';
import { growSnake, isOnSnake } from './snake.js'

const getRandomPosition = () => {
    return {
        x: Math.floor(Math.random() * (BOARD_SIZE - 1) + 1),
        y: Math.floor(Math.random() * (BOARD_SIZE - 1) + 1)
    }
}

let foodPosition = getRandomPosition();

const updateFood = () => {
    if (isOnSnake(foodPosition)) {
        growSnake(GROWTH_RATE);
        foodPosition = getRandomPosition();
    }
}

const drawFood = (board) => {
    const foodPiece = document.createElement('div');
    foodPiece.style.gridRowStart = foodPosition.y;
    foodPiece.style.gridColumnStart = foodPosition.x;
    foodPiece.classList.add('food');

    board.appendChild(foodPiece);
}



export {
    updateFood,
    drawFood
}