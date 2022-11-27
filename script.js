"use strict";

// Variables
let gridSizeNum = 16;
const container = document.querySelector(".container");
const btnSize = document.querySelector("#grid-size");
const showGridSize = document.querySelector(".show-grid-size");
const clearBtn = document.querySelector("#clearBtn");
showGridSize.textContent = `Actual size: ${gridSizeNum} x ${gridSizeNum}`;
let squareColor = "black";
let randomColorBtn = "off";

// Prompt user the grid size of choice

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

// Empty grid before changing size

const emptyGrid = function removeGrid(board) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

// Clear grid

const clearGrid = function () {
  const clearSquare = Array.from(document.querySelectorAll(".column"));
  clearSquare.forEach((square) => (square.style.backgroundColor = "white"));
};

clearBtn.addEventListener("click", function () {
  clearGrid();
});

// Add the squares in the container

let addSquares = function () {
  const row = document.createElement("div");
  row.classList.add("row");
  container.append(row);
  for (let i = 0; i < gridSizeNum; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.append(column);
  }
  // Change grid color on mouse enter

  const squares = Array.from(document.querySelectorAll(".column"));
  squares.forEach((square) =>
    square.addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = squareColor;
    })
  );
};
// Fill the Grid
let gridFill = function (num) {
  for (let i = 0; i < num; i++) {
    addSquares();
  }
};

// Use provide grid size to fill de board

gridFill(gridSizeNum);

// let userInput = "";
// Add Grid = 16x16

// for (let i = 1; i < 273; i++) {
// Button prompt

// btnSize.addEventListener("click", askGridSize);

// function askGridSize() {
//   userInput = parseInt(prompt("Select a grid size.", 16));
//   if (typeof userInput === "undefined" || userInput > 100) {
//     return;
//   } else {
//     grid(userInput);
//   }
// }
// Grid

// function grid(userInput) {
//   if (userInput === 16) {
//     for (let i = 1; i < 273; i++) {
//       const div = document.createElement("div");
//       div.classList.add("container-grid");
//       container.append(div);
//     }
//   } else {
//     for (let i = 1; i < userInput ** 2 + (userInput + 1); i++) {
//       const div = document.createElement("div");
//       div.classList.add("container-grid");
//       container.append(div);
//     }
//   }
// }

// Select Divs inside container

// const colorGrid = document.getElementsByClassName("column");
// console.log(colorGrid.length);

// // Event Listener for changing background color

// for (let j = 0; j < colorGrid.length; j++) {
//   colorGrid[j].addEventListener("mouseover", function () {
//     colorGrid[j].style.backgroundColor = "black";
//   });
// }
