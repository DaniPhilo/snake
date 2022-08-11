let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection
}

const changeInputDirection = (newDirection) => {
    inputDirection = newDirection;
}

window.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 };
            break
        case 'ArrowDown':
        case 's':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 };
            break
        case 'ArrowRight':
        case 'd':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 };
            break
        case 'ArrowLeft':
        case 'a':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 };
            break
    }
});

export {
    getInputDirection,
    changeInputDirection
}