import { SNAKE_SPEED } from "./config.js";
import { changeInputDirection } from "./input.js";
import { drawFood, updateFood } from "./food.js";
import { updateSnake, drawSnake, wallCollision, bodyCollision, restartSnake } from "./snake.js";

let lastRenderTime = 0;
const board = document.getElementById('board');
const main = (currentTime) => {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime;

    updateSnake();
    drawSnake(board);
    updateFood();
    drawFood(board);
    gameOver();

}

const gameOver = () => {
    if (wallCollision()) {
        changeInputDirection({ x: 0, y: 0 });
        console.log('Wall collision!');
    }
    if (bodyCollision()) {
        changeInputDirection({ x: 0, y: 0 });
        console.log('Body collision!');
    }
}

window.requestAnimationFrame(main);


const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

startBtn.addEventListener('click', event => {
    changeInputDirection({ x: 0, y: -1 });
});

restartBtn.addEventListener('click', event => {
    restartSnake();
    changeInputDirection({ x: 0, y: -1 });
});
