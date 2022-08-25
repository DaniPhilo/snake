let BOARD_SIZE = 21;

let SNAKE_SPEED = 8;

let GROWTH_RATE = 3;

const changeSpeed = (direction, counter) => {
    if (direction === 'up' && SNAKE_SPEED < 16) {
        SNAKE_SPEED += 4;
        counter.innerText = Number(counter.innerText) + 1;
    }
    if (direction === 'down' && SNAKE_SPEED > 8) {
        SNAKE_SPEED -= 4;
        counter.innerText = Number(counter.innerText) - 1;
    }
    console.log(SNAKE_SPEED);
}

export {
    BOARD_SIZE,
    SNAKE_SPEED,
    GROWTH_RATE,
    changeSpeed
}