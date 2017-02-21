var elUsername = document.getElementById('username'); // Username input
var elMsg = document.getElementById('feedback'); // Error msg element

function checkUsername(minLength) { // Declare function
  if (elUsername.value.length < minLength) {    // If username is too short
    // Set the error message
    elMsg.innerHTML = 'Username must be  ' + minLength + ' characters or more';
  } else {  // Otherwise
    elMsg.innerHTML = '';
    // Clear msg
  }
}

elUsername.addEventListener('blur',  function() { // When it loses focus
  checkUsername(5); // Pass argument here
}, false);

// Like the previous exercise a function is created, which is called upon the specified event being fired, but with this technique a parameter is able to be passed into the function
// This is done by calling an IIFE upon the firing of the event, which in turn calls the desired function with the passed parameter
// In the actual function declaration a parameter is passed, which will be set to the value passed into the function when it is called, this is then used as part of the if statement
