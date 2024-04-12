const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const slider = document.getElementById('slider');

const eraseButton = document.getElementById('erase');

// Add event listeners for the canvas, slider, and erase button
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mousemove', paint);
slider.addEventListener('input', updateSliderValue);
eraseButton.addEventListener('click', activateEraser);

// Initialize the drawing state
let painting = false;
let erasing = false; // Added variable to track eraser state
let brushColor = 'black';
let brushSize = 2;

// Start painting function
function startPainting(event) {
  if (erasing) {
    ctx.strokeStyle = 'white'; // Set color to white for eraser
  } else {
    ctx.strokeStyle = brushColor;
  }
  painting = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Stop painting function
function stopPainting() {
  painting = false;
  ctx.closePath();
}

// Paint function
function paint(event) {
  if (!painting) return;
  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  ctx.lineWidth = brushSize;
  ctx.stroke();
}

// Update slider value function
function updateSliderValue() {
  brushSize = slider.value;
}

// Activate eraser function
function activateEraser() {
  erasing = !erasing; // Toggle eraser state
  if (erasing) {
    eraseButton.classList.add('active'); // Add visual indication for active eraser
    canvas.style.cursor = 'crosshair'; // Change cursor to crosshair to indicate eraser mode
  } else {
    eraseButton.classList.remove('active'); // Remove visual indication for active eraser
    canvas.style.cursor = 'auto'; // Restore default cursor
  }
}

const blueBrush = document.getElementById('blue');
const blackBrush = document.getElementById('black');
const redBrush = document.getElementById('pink');
const yellowBrush = document.getElementById('yellow');


blueBrush.addEventListener('click', () => {
  brushColor = 'blue';
});

blackBrush.addEventListener('click', () => {
  brushColor = 'black';
});

redBrush.addEventListener('click', () => {
  brushColor = 'red';
});

yellowBrush.addEventListener('click', () => {
  brushColor = 'yellow';
});

const newButton = document.getElementById('new');


newButton.addEventListener('click', clearCanvas);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}



