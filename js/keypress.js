var el;   // Declare variables

function charCount(e) {   // Declare function
  var textEntered, charDisplay, counter, lastKey;   // Declare variables
  textEntered = document.getElementById('message').value; // Get user's text
  charDisplay = document.getElementById('charactersLeft');  // Counter element
  counter = (180 - (textEntered.length)); // Number of available characters left
  charDisplay.textContent = counter;  // Show chars left
  lastKey = document.getElementById('lastKey');   // get last key element
  lastKey.textContent = 'Last key in ASCII code: ' + e.keyCode; // create msg
}

el = document.getElementById('message');    // get msg element
el.addEventListener('keyup', charCount, false); // on keyup - call charCount() in bubbling phase

// This exercise gets the #message element and adds an event listener to it, which fires on a keyup, calling the charCount() function
// The charCount() function then gets the text that was input by the user and calculates how many remaining characters are available and displays that number, it also gets the last character that was displayed and disaplays its ASCII code
