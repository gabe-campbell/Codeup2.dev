(function () {
  var bio      = document.getElementById('bio'),        // <textarea> element
      bioCount = document.getElementById('bio-count');  // Character count el

  addEvent(bio, 'focus', updateCounter);       // Call updateCounter() on focus
  addEvent(bio, 'input', updateCounter);       // Call updateCounter() on input

  addEvent(bio, 'blur', function () {          // On leaving the element
    if (bio.value.length <= 140) {             // If bio is not too long
      bioCount.className = 'hide';             // Hide the counter
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;      // Get the target of the event
    var count = 140 - target.value.length;      // How many characters are left
    if (count < 0) {                            // If less than 0 chars free
      bioCount.className = 'error';             // Add class of error
    } else if (count <= 15) {                   // If less than 15 chars free
      bioCount.className = 'warn';              // Add class of warn
    } else {                                    // Otherwise
      bioCount.className = 'good';              // Add class of good
    }
    var charMsg = '<b>' + count + '</b>' + ' characters'; // Message to display
    bioCount.innerHTML = charMsg;               // Update the counter element
  }

}());

// The script is placed into an IIFE
  // It begins by declaring two functions and setting their value to reference elements fromthe document
    // The first is called bio and is set to the #bio element
    // The second is called bioCount and is set to the #bio-count element

  // The addEvent() function is called on the #bio element to fire on a focus event, triggering the updateCounter() function
  // The addEvent() function is called on the #bio element to fire on a input event, triggering the updateCounter() function
  // The addEvent() function is called on the #bio element to fire on a blur event, triggering an anonymous function
    // The function then checks to see if the number of characters in the #bio element is less than or equal to 140
      // If it is then the bioCount element has its .className proprty set to 'hide'

  // The updateCounter() function is then declared and passed the event object
    // The function then gets the target of the event
    // A variable called count is then declared and seto calculate 140 minus the value of the number of characters in the target element (140 minus the characters in the #bio element)
    // An if statement then checks to see if the count variable is less than 0
      // If it is then the bioCount element get the .className of 'error'
    // Else if the count is less than or equal to 15, then the bioCount element gets the .className of 'warn'
    // Else the bioCount element gets the .className of 'good'
    // (Dependng on the amount of characters left the class name of the element will change, giving the element new CSS rules)
    // A variable called charMsg is then declared and set to contain markup with the value of count
    // The bioCount element then has its HTML set to the charMsg string
