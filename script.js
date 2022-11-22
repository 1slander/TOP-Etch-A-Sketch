"use strict";

// Variables

const container = document.querySelector(".container");

// Add 16 divs
for (let i = 1; i < 273; i++) {
  const div = document.createElement("div");
  div.classList.add("container-grid");
  container.append(div);
}
