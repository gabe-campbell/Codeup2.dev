function checkUsername() {    // Declare function
  var username = el.value;    // Store username in a variable
  if (username.length < 5) {    // If usernameis less than 5 characters
    elMsg.className = 'warning';    // Change class on message
    elMsg.textContent = 'Not long enough, yet...';  // Update message
  } else {    // Otherwise
      elMsg.textContent = '';    // Clear the message
  }
}

function tipUsername() {    // Declare function
  elMsg.className = 'tip';    // Change class for message
  elMsg.innerHTML = 'Username must be at least 5 characters';   // Add message
}

var el = document.getElementById('username'); // Username input
var elMsg = document.getElementById('feedback');    // Element to hold message

// When the username input gains / loses focus call functions above
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);  // blur call checkUsername()

/* LONGER VERSION WITH IE8 (and lower) compatibility

if (el.addEventListener) {
  el.addEventListener('focus', tipUsername, false);
  el.addEventListener('blur', checkUsername, false);
} else {
  el.attachEvent('onfocus', tipUsername);
  el.attachEvent('onblur', checkUsername);
}

*/

// This exercise gets the username input and adds two event listeners to it
// The first listener fires the tipUsername() function when the username input gains focus, which addEventListener a helpful tip underneath the input
// The second listener fires the checkUsername() function when the username input loses focus, which checks if the length of the input value from the user is long enough, if it isn't then it changes the tip to a warning, if it is then it clears both messages
