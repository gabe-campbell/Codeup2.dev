function checkLength(e, minLength) {  // Declare function
  var el, elMsg;    // Declare variables
  if (!e) {   // If event object doesn't exist
    e = window.event;    // Use IE fallback
  }
  el = e.target || e.srcElement;  // Get target of event
  elMsg = el.nextSibling;   // get its next sibling

  if (el.value.length < minLength) {  // If length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {  // Otherwise
    elMsg.innerHTML = ''; // Clear message
  }
}

var elUsername = document.getElementById('username'); // Get username input
if (elUsername.addEventListener) { // If event listener is supported
  elUsername.addEventListener('blur', function(e) { // On blur event
    // This function is checkLength NOT checkUsername
    checkLength(e, 5);  // Call checkLength()
  }, false);    // Capture in bubble phase
} else {  // Otherwise
  elUsername.attachEvent('onblur', function(e) {  // IE fallback on blur
    // This function is checkLength NOT checkUsername
    checkLength(e, 5);   // Call checkLength()
  });
}

// This exercise gets the username input and if addEventListener is supported then it adds the event listener calling the checkLength function, this function is passed e (the event object) and the parameter that controls the minLength
// If addEventListener is not supported then the IE fallback (attachEvent) is used

// the checkLength function is passed the event object and the minLength parameter, and checks if the event object is not supported, if it doesn't then it used the IE fallback, if it is supported then the function gets the target of the event and does a comparison to the minLength parameter, similar to the previous exercises
