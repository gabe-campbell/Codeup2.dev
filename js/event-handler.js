function checkUsername() {  // Declare function
  var elMsg = document.getElementById('feedback'); // Get feedback element
  if (this.value.length < 5) {    // If user name is too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {    // Otherwise
    elMsg.textContent = '';     // Clear message
  }
}

var elUsername = document.getElementById('username'); // Get username input
elUsername.onblur = checkUsername; // When it loses focus call checkUsername();

// This exercise creates a function that is called upon the username element when that element loses focus
// The focus checks the value of the user input, and if the number of characters is too short then a warning message is displayed, if the username is long enough then the warning message is cleared
