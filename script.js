const PRIMARYDARK = "#333333";
const PRIMARYCOLOR = "#ededed";
const SECONDARYCOLOR = "#fefefe";
const DEFAULTMODE = "color";
const DEFAULTSIZE = 16;

let defaultColor = PRIMARYCOLOR;
let currentSize = DEFAULTSIZE;
let currentMode = DEFAULTMODE;

const colorPicker = document.querySelector("#color-picker");
const colorMode = document.querySelector(".color-mode");
const rainbowMode = document.querySelector(".rainbow-mode");
const clear = document.querySelector(".clear");
const sizeValue = document.querySelector(".sizeValue");
const sizeSlider = document.querySelector("#slider");
const container = document.querySelector(".container");
const grid = document.querySelector(".grid-item");

let mouseDown = false;

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    let grid = Array.from(document.getElementsByClassName("grid-item"));
    grid.forEach((grid) => {
      function changeColor() {
        grid.style.backgroundColor = "green";
      }
      grid.addEventListener("click", changeColor);
      grid.addEventListener("mousedown", changeColor);
    });
  }
}
makeRows(16, 16);
/* grid.onmouseover = (mouseDown) => {
        grid.onmousedown = () => {
          mouseDown = true;
          grid.style.backgroundColor = "green";
        };
      };
    });
  } */
