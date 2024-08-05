const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const eraseButton = document.querySelector(".btn.eraser");
const year = document.getElementById('year');

const gridSize = 600;

function createGrid(numberofGrid) {
    container.innerHTML = '';
    const squareSize = gridSize / numberofGrid;

    for (let i=0; i< numberofGrid * numberofGrid; i++){
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",60)";
            if (e.altKey){
                div.style.backgroundColor = "white"; 
            }
        });
        container.appendChild(div);
    }
}


function erase(e){
    const box1 = document.getElementsByClassName('grid');
    for (let i = 0; i < box1.length; i++){
        box1[i].style.backgroundColor = "white";
        };
}


function addGrid(e) {
    let numberofGrid = Number(prompt("How many grids do you want? Max 100"));

    if (isNaN(numberofGrid) || numberofGrid <=0 || numberofGrid > 100){
        alert("Please enter a a number from 1 to 100");
    } else{
        createGrid(numberofGrid);
    }
}

eraseButton.addEventListener('click', erase);
btn.addEventListener('click', addGrid);
year.innerHTML = new Date().getFullYear();

// Initilize grid
createGrid(16);