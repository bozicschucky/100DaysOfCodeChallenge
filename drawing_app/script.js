const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeElement = document.getElementById("size");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clear");

let size = 5;
let color = "black";
let x, y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

increaseBtn.addEventListener("click", () => {
  size = size + 1;
  sizeElement.innerHTML = size;
});

decreaseBtn.addEventListener("click", () => {
  size = size - 1;
  sizeElement.innerHTML = size;
});

colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
