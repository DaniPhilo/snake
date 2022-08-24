import { SNAKE_SPEED, changeSpeed } from "./config.js";
import { changeInputDirection } from "./input.js";
import { drawFood, updateFood } from "./food.js";
import { updateSnake, drawSnake, wallCollision, bodyCollision, restartSnake } from "./snake.js";

let isGameOver = false;
let score = 0;

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

// SCORE //

const scoreCounter = document.getElementById('score-counter');

const changeScore = (newScore) => {
    score += newScore;
    scoreCounter.innerText = score;
}

// GAME OVER //

const showGameOverModule = (boolean) => {
    const gameOverModule = document.querySelector('.game-over-module');
    const scoreResult = document.getElementById('score-result');
    scoreResult.innerText = score;
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

// RESTART //

const restart = () => {
    isGameOver = false;
    restartSnake();
    showGameOverModule(false);
    score = 0;
    scoreCounter.innerText = 0;
}

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', restart);


// CUSTOMIZE SPEED // 

const incrementSpeedBtn = document.getElementById('increment-speed');
const decrementSpeedBtn = document.getElementById('decrement-speed');
const speedCounter = document.getElementById('speed-counter');

incrementSpeedBtn.addEventListener('click', () => {
    changeSpeed('up', speedCounter);
});
decrementSpeedBtn.addEventListener('click', () => {
    changeSpeed('down', speedCounter);
});


window.requestAnimationFrame(main);

export { isGameOver, changeScore }