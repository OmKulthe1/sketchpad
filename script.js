const grid = document.querySelector('.grid');
let gridSize = 600;

let form = document.getElementById("jsForm");
let cP = document.getElementById("jsCP");

let numRows = 16;
let numCols = 16;

function changeSquareColor(event) {
  let color = cP.elements.cP.value;
  if(event.target.className === 'square') {
    event.target.style[`background-color`] = `${color}`;
  }
}

function clSquares() {
  createSquares();
  setSquareSize();
}

function updateGrid() {
  numCols = form.elements.gSize.value;
  numRows = form.elements.gSize.value;
  createSquares();
  setSquareSize();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  updateGrid();
})

function setGridSize() {
  grid.style.width = `${gridSize}px`;
  grid.style.height = `${gridSize}px`;
}

function setSquareSize() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.width = `${gridSize / numCols}px`;
    square.style.height = `${gridSize / numRows}px`;
  });
}

function createSquares() {
  const squareRemover = document.querySelectorAll('.square');
  squareRemover.forEach(element => {
    element.remove();
  })
  for(let i = 0; i< numCols*numRows; i++){
    const square = document.createElement("div");
    square.classList.add('square');
    grid.appendChild(square);
  }
}

setGridSize();
createSquares();
setSquareSize();

grid.addEventListener("mousedown", () => {
  isMouseDown = true;
});

grid.addEventListener("mouseup", () => {
  isMouseDown = false;
});

grid.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

grid.addEventListener("mousemove", (event) => {
  if (isMouseDown && event.target.className === 'square') {
    changeSquareColor(event);
  }
});