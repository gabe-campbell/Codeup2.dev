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
if (elUsername.addEventListener) { // Ife event listener is supported
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
