var pass = 50; // Pass mark
var score = 75; // Current score
var msg;        // Message

// Select message to write based on score
if (score > pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;

// This exercise uses an if-else statement to determine which code block to execute
