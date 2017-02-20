var i = 1;      // Set counter to 1
var msg = '';   // Message

// Store 5 times table in a variable
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br>';
} while (i < 1);

// Still runs at least once

document.getElementById('answer').innerHTML = msg;

// This exercise is similar to the while statement, but ensures that the code block runs at least one time
