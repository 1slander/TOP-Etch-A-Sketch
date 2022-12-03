"use strict";

// Variables
let gridSizeNum = 16;
const container = document.querySelector(".container");
const btnSize = document.querySelector("#grid-size");
const showGridSize = document.querySelector(".show-grid-size");
const clearBtn = document.querySelector("#clearBtn");
const randomBtn = document.querySelector("#randomColors");
showGridSize.textContent = `Actual size: ${gridSizeNum} x ${gridSizeNum}`;
let squareColor = "black";
let randomColorBtn = "off";

// 1. Add the squares in the container

let addSquares = function () {
  const row = document.createElement("div");
  row.classList.add("row");
  container.append(row);
  for (let i = 0; i < gridSizeNum; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.append(column);
  }
  // 7. Change grid color on mouse enter

  const squares = Array.from(document.querySelectorAll(".column"));
  squares.forEach((square) =>
    square.addEventListener("mouseenter", function (event) {
      if (randomColorBtn == "off") {
        event.target.style.backgroundColor = squareColor;
      } else {
        event.target.style.backgroundColor = rndColor();
      }
    })
  );
};
// 2. Fill the Grid
let gridFill = function (num) {
  for (let i = 0; i < num; i++) {
    addSquares();
  }
};

// 3. Use provide grid size to fill de board

gridFill(gridSizeNum);

// 4. Prompt user the grid size of choice

btnSize.addEventListener("click", function () {
  let userInput = window.prompt("Select a grid size between 1-100", "16");
  if (
    userInput == null ||
    userInput <= 0 ||
    userInput > 100 ||
    isNaN(userInput)
  ) {
    alert("Please insert a number between 1 and 100");
    return;
  } else {
    gridSizeNum = userInput;
    emptyGrid(container);
    gridFill(gridSizeNum);
    showGridSize.textContent = `Actual size: ${gridSizeNum} x ${gridSizeNum}`;
  }
});

// 5. Empty grid before changing size

const emptyGrid = function removeGrid(board) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

// 6. Clear grid

const clearGrid = function () {
  const clearSquare = Array.from(document.querySelectorAll(".column"));
  clearSquare.forEach((square) => (square.style.backgroundColor = "white"));
};

clearBtn.addEventListener("click", function () {
  clearGrid();
});

// 8. Create random color generator
const rndColor = function () {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return `rgb(${R}, ${G}, ${B})`;
};

// 9. Change random colour btn on

randomBtn.addEventListener("click", function () {
  if (randomColorBtn == "off") {
    randomColorBtn = "on";
    randomBtn.style.backgroundColor = "green";
    randomBtn.textContent = "Random ON";
  } else {
    randomColorBtn = "off";
    randomBtn.style.backgroundColor = "red";
    randomBtn.textContent = "Random OFF";
  }
  console.log(randomColorBtn);
});
