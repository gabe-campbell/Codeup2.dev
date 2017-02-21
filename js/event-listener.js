function checkUsername() {  // Declare function
  var elMsg = document.getElementById('feedback');  // Get feedback element
  if (this.value.length < 5) {  // If username is too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {  // Otherwise
    elMsg.textContent = '';   // Clear msg
  }
}

var elUsername = document.getElementById('username'); // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

// This exercise creates a function similar to the previous exercise, but it uses an event listener, which takes 3 parameters: the event to listen for, the function to call upon the event occurring, and a boolean value which controls the direction that the event takes place (bubbling or capture)

// Bubbling occurs on the most specific event and then spreads outwards towards the containing elements, is tied to the boolean value of false

// Capturing (or trickling) occurs from the outermost element and goes down to the most specific element, is tied to the boolean value of true
