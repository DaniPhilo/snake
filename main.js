import { SNAKE_SPEED } from "./config.js";
import { changeInputDirection } from "./input.js";
import { drawFood, updateFood } from "./food.js";
import { updateSnake, drawSnake, wallCollision, bodyCollision, restartSnake } from "./snake.js";

let isGameOver = false;

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

const showGameOverModule = (boolean) => {
    const gameOverModule = document.querySelector('.game-over-module');
    boolean ? gameOverModule.classList.remove('hidden') : gameOverModule.classList.add('hidden')
}

const gameOver = () => {

    if (wallCollision()) {
        isGameOver = true;
        changeInputDirection({ x: 0, y: 0 });
        showGameOverModule(true);
    }
    if (bodyCollision()) {
        isGameOver = true;
        changeInputDirection({ x: 0, y: 0 });
        showGameOverModule(true);
    }
}

const restart = () => {
    isGameOver = false;
    restartSnake();
    showGameOverModule(false);
}

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', restart);

window.requestAnimationFrame(main);

export { isGameOver }