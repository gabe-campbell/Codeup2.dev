(function () {
  var password = document.getElementById('password'); // Store password inputs
  var passwordConfirm = document.getElementById('conf-password');

  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement;             // Get target element
    if (target.value.length < 8) {                     // If its length is < 8
      target.className = 'fail';                       // Set class to fail
    } else {                                           // Otherwise
      target.className = 'pass';                       // Set class to pass
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;              // Get target element
    if (target.className === 'fail') {                  // If class shows fail
      target.className = '';                            // Clear class
    }
  }

  function passwordsMatch(e) {
    var target = e.target || e.srcElement;               // Get target element
    // If value matches pwd and it is longer than 8 characters
    if ((password.value === target.value) && target.value.length >= 8) {
      target.className = 'pass';                         // Set class to pass
    } else {                                             // Otherwise
      target.className = 'fail';                         // Set class to fail
    }
  }

  addEvent(password, 'focus', removeErrorHighlighter);
  addEvent(password, 'blur', setErrorHighlighter);
  addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
  addEvent(passwordConfirm, 'blur', passwordsMatch);
}());

// The script is placed into an IIFE
  // It first creates a variable called password that gets the #password element
  // it then creates another variable called passwordConfirm that gets the #conf-password element

  // The script then decalres a function called setErrorHighlighter() and passes it the event object
    // The function gets the target of the event
    // It then uses an if statement to see if the event targets value is less than 8
      // If the condition passes, then the targets classname is set to fail, giving it new CSS rules
      // if the condition fails, then the targets classname is set to pass, giving it new CSS rules

  // A function called removeErrorHighlighter() is then declared and is passed the event object
    // The function gets the target of the event
    // It then uses an if statement to check if the targets class is equal to fail
      // If the condition passes then the targets class name is cleared

  // A function called passwordsMatch() is declared and passed the event object
    // The function the gains the target of the event
    // It uses an if statement to check if the password elements value is equal to the targets value AND if the targets value has more than 8 characters
      // If both conditions pass, then the targets gets the class name of 'pass'
      // Else the target gets a classname of 'fail'

  // A series of event listeners are then created using the addEvent() function
    // The first is placed on the password element and is fired by a focus event, triggering the removeErrorHighlighter() function
    // The second is also on the password element and is fired by a blur event, triggering the setErrorHighlighter() function
    // The third is on the passwordConfirm element and is fired by a focus event, triggering the removeErrorHighlighter() function
    // The last is also on the passwordConfirm element and is fired by a blur event, triggering the passwordsMatch() function
