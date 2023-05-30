"use strict";
const PRIMARYDARK = "#333333";
const PRIMARYCOLOR = "#ededed";
const SECONDARYCOLOR = "#fefefe";
const DEFAULTMODE = "color";
const DEFAULTSIZE = 16;

let defaultColor = PRIMARYDARK;
let currentSize = DEFAULTSIZE;
let currentMode = DEFAULTMODE;

const colorPicker = document.querySelector("#color-picker");
const colorMode = document.querySelector(".color-mode");
const rainbowMode = document.querySelector(".rainbow-mode");
const clear = document.querySelector(".clear");
const sizeValue = document.querySelector(".size-value");
const sizeSlider = document.querySelector("#slider");
const container = document.querySelector("#container");

let mouseDown = false;

// This changes the primary color
colorPicker.addEventListener("input", colorPick);
function colorPick(e) {
  let grid = Array.from(document.getElementsByClassName("grid-item"));
  grid.forEach((grid) => {
    function colorPicker() {
      const selectedColor = e.target.value;
      defaultColor = selectedColor;
    }
    grid.addEventListener("mousedown", function () {
      mouseDown = true;
      colorPicker();
    });
    grid.addEventListener("mouseover", function () {
      if (mouseDown) {
        colorPicker();
      }
    });
    grid.addEventListener("mouseup", function () {
      mouseDown = false;
    });
  });
}

//This code below makes it default color
colorMode.addEventListener("click", defaultMode);
function defaultMode() {
  let grid = Array.from(document.getElementsByClassName("grid-item"));
  grid.forEach((grid) => {
    function normalMode() {
      grid.style.backgroundColor = defaultColor;
      defaultColor = PRIMARYDARK;
    }
    grid.addEventListener("mousedown", function () {
      mouseDown = true;
      normalMode();
    });
    grid.addEventListener("mouseover", function () {
      if (mouseDown) {
        normalMode();
      }
    });
    grid.addEventListener("mouseup", function () {
      mouseDown = false;
    });
  });
}

// This changes to rainbow mode
rainbowMode.addEventListener("click", rainbowModi);
function rainbowModi() {
  let grid = Array.from(document.getElementsByClassName("grid-item"));
  grid.forEach((grid) => {
    function rainbowModel() {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      grid.style.backgroundColor = randomColor;
      return randomColor;
    }
    grid.addEventListener("mousedown", function () {
      mouseDown = true;
      rainbowModel();
    });
    grid.addEventListener("mouseover", function () {
      if (mouseDown) {
        rainbowModel();
      }
    });
    grid.addEventListener("mouseup", function () {
      mouseDown = false;
    });
  });
}
//This code will clear the grid
clear.addEventListener("click", clearGrid);
function clearGrid() {
  let grid = Array.from(document.getElementsByClassName("grid-item"));
  grid.forEach((grid) => {
    grid.style.backgroundColor = SECONDARYCOLOR;
  });
}
//This code change the slider value
sizeSlider.addEventListener("input", sizing);
function sizing() {
  const value = Number(sizeSlider.value);
  sizeValue.textContent = `${value} x ${value}`;
}

//This code below makes the rows and cols
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    let grid = Array.from(document.getElementsByClassName("grid-item"));
    grid.forEach((grid) => {
      function changeColor() {
        grid.style.backgroundColor = defaultColor;
      }
      grid.addEventListener("mousedown", function () {
        mouseDown = true;
        changeColor();
      });
      grid.addEventListener("mouseover", function () {
        if (mouseDown) {
          changeColor();
        }
      });
      grid.addEventListener("mouseup", function () {
        mouseDown = false;
      });
    });
  }
}
makeRows(16, 16);
//This code clears the grid
