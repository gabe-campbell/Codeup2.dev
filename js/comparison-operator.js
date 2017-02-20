// Create variables and assign information

var pass = 50; // Pass mark
var score = 90; // Score

// Conditional check if the user has passed
var hasPassed = score >= pass; // Set to a boolean value

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'Level Passed: ' + hasPassed;

// This exercise uses a conditional statement to show if the user has passed or failed based on the operation
