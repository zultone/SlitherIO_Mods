// ==UserScript==
// @name         Neon Line for ANY MOD!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://slither.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=slither.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set up some variables
let canvas2;
let ctx;
let isDrawing = false;
let lastX;
let lastY;
let mouseX;
let mouseY;


// Add event listener for key presses
document.addEventListener('keydown', (event) => {
  if (event.key === 'c' && !canvas2) {
    // Create a canvas element and append it to the body



    canvas2 = document.createElement('canvas');
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    document.body.appendChild(canvas2);

// Add the necessary CSS styles to the canvas
canvas2.style.position = 'absolute';
canvas2.style.top = '0';
canvas2.style.left = '0';
canvas2.style.zIndex = '9999';
canvas2.style.backgroundColor = 'transparent';

    // Get the canvas context and set its properties
ctx = canvas2.getContext('2d');
ctx.lineWidth = 1;
ctx.lineCap = 'round';
ctx.strokeStyle = 'yellow';
ctx.shadowBlur = 3;
ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';

    // Set up some more variables
    isDrawing = true;
    lastX = canvas2.width / 2;
    lastY = canvas2.height / 2;

    // Add event listener for mouse movement
    canvas2.addEventListener('mousemove', draw);
  } else if (event.key === 'c' && canvas2) {
    // Remove the canvas element from the body and reset variables
    document.body.removeChild(canvas2);
    canvas2 = null;
    ctx = null;
    isDrawing = false;
    lastX = null;
    lastY = null;
  }
});

function draw(event) {
  // Get the current mouse position
  mouseX = event.clientX;
  mouseY = event.clientY;

  // Calculate the angle between the center of the canvas and the mouse position
  const angle = Math.atan2(mouseY - canvas2.height / 2, mouseX - canvas2.width / 2);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas2.width, canvas2.height);

  // Draw a line from the center of the screen to the current mouse position
  ctx.beginPath();
  ctx.moveTo(canvas2.width / 2, canvas2.height / 2);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = "green"; // set the stroke style to white
  ctx.stroke();

  // Draw a small green circle at the mouse point
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "red"; // set the fill style to green
  ctx.fill();
}










})();