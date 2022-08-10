import { getInputDirection } from "./input.js";

let snakeBody = [
    { x: 11, y: 11 },
];

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    const inputDirection = getInputDirection();
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

const drawSnake = (board) => {
    board.innerHTML = '';
    snakeBody.forEach(el => {
        const snakePiece = document.createElement('div');
        snakePiece.style.gridRowStart = el.y;
        snakePiece.style.gridColumnStart = el.x;
        snakePiece.classList.add('snake');

        board.appendChild(snakePiece);
    })
}

const growSnake = (quantity) => {
    const input = getInputDirection();
    const tale = snakeBody.length - 1;
    for (let i = 0; i < quantity; i++) {
        snakeBody.push({ x: (tale.x + input.x), y: (tale.y + input.y) })
    }
}

const isOnSnake = (position, { ignoreFirstElement = false } = {}) => {
    return snakeBody.some((element, index) => {
        if (ignoreFirstElement && index === 0) return false
        return position.x === element.x && position.y === element.y
    })
}

const wallCollision = () => {
    return snakeBody[0].x < 1 || snakeBody[0].x > 21 || snakeBody[0].y < 1 || snakeBody[0].y > 21
}

const bodyCollision = () => {
    return isOnSnake(snakeBody[0], { ignoreFirstElement: true })
}

const restartSnake = () => {
    snakeBody = [{ x: 11, y: 11 }];
}

export {
    updateSnake,
    drawSnake,
    growSnake,
    isOnSnake,
    wallCollision,
    bodyCollision,
    restartSnake
}