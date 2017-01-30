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
