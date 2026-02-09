"use strict";

// #1 - Tracking button clicks and displaying a message
function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function () {
    console.log(message);
  });
}
// Demonstration of function usage
// handleButtonClick("myButton", "Button clicked!");

// #2 - Tracking mouse cursor position
function trackMousePosition() {
  document.addEventListener("mousemove", function (event) {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
}
// Demonstration of function usage
// trackMousePosition();

// #3 - Event delegation for tracking clicks on list items
function setupEventDelegation(selector) {
  const list = document.querySelector(selector);
  list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log(`Item clicked: ${event.target.textContent.trim()}`);
    }
  });
}
// Demonstration of function usage
// setupEventDelegation("#testList");

export { handleButtonClick, trackMousePosition, setupEventDelegation };
