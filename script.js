"use strict";

// Variables

const container = document.querySelector(".container");

// Add Grid = 16x16

for (let i = 1; i < 273; i++) {
  const div = document.createElement("div");
  div.classList.add("container-grid");
  container.append(div);
}

// Select Divs inside container

const colorGrid = document.getElementsByClassName("container-grid");

// Event Listener for changing background color

for (let j = 0; j < colorGrid.length; j++) {
  colorGrid[j].addEventListener("mouseover", function () {
    colorGrid[j].style.backgroundColor = "black";
  });
}
