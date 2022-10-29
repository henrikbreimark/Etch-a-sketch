let drawingBoard = document.getElementById('board');
let resetBoardButton = document.getElementById('resetBoard');
let squareBox = document.getElementById('squares');
let firstLoad = true;

addEventListener('load', buildGrid);

resetBoardButton.addEventListener('click', resetBoard);

function buildGrid() {
    let newBoard = document.createElement('div');
    let inputValue = squareBox.value;
    let numberOfSquares = parseInt(inputValue);

    if (isNaN(inputValue)) {
        numberOfSquares = 1;
    }
    if (numberOfSquares > 100) {
        numberOfSquares = 1;
    }
    newBoard.classList.add('boardLayout');
    newBoard.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
    drawingBoard.appendChild(newBoard);
    for (let index = 0; index < (numberOfSquares * numberOfSquares); index++) {
        let newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newBoard.appendChild(newPixel);
        newPixel.addEventListener('pointerover', changeOpacity);
    }

}

function changeOpacity(evt) {
    let target = evt.target;
    let currentOpacity = getComputedStyle(target).getPropertyValue("opacity");
    target.style.opacity = parseFloat(currentOpacity) + 0.1;
}

function resetBoard() {
    let currentBoard = document.querySelector('.boardLayout');
    currentBoard.remove();
    buildGrid();
}