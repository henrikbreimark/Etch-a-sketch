let drawingBoard = document.getElementById('board');
let resetBoardButton = document.getElementById('resetBoard')


addEventListener('load', buildGrid);


resetBoardButton.addEventListener('click', resetBoard);



function buildGrid(){
    let newBoard = document.createElement('div');
    newBoard.classList.add('boardLayout')
    drawingBoard.appendChild(newBoard);

    for (let index = 0; index < 2500; index++) {
        let newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newBoard.appendChild(newPixel); 
        newPixel.addEventListener('pointerover', changeOpacity)
    }
}

function changeOpacity (evt){
    let target = evt.target;
    let currentOpacity = getComputedStyle(target).getPropertyValue("opacity");
    target.style.opacity = parseFloat(currentOpacity) + 0.1;
}


function resetBoard (){
    let currentBoard = document.querySelector('.boardLayout');
    currentBoard.remove();
    buildGrid();
}