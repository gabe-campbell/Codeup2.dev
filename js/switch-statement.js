var msg;      // Message
var level = 2; // Level

// Determine message based on level
switch (level) {
  case 1:
    msg = 'Good luck on the first test';
    break;

  case 2:
    msg = 'Second of three - keep going!';
    break;

  case 3:
    msg = 'Final round, almost there!';
    break;

  default:
    msg = 'Good luck!';
    break;
}

var el = document.getElementById('answer');
el.textContent = msg;

// This exercise uses a switch statement to display the corresponding message based on the level the user is on, if there is no level the code will default to the last code block
