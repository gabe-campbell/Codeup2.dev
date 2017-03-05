(function() {
  var form, options, other, otherText, hide;           // Declare variables
  form      = document.getElementById('how-heard');    // Get the form
  options   = form.elements.heard;                     // Get the radio buttons
  other     = document.getElementById('other');        // Other radio button
  otherText = document.getElementById('other-text');   // Other text input
  otherText.className = 'hide';                        // Hide other text input

  for (var i = [0]; i < options.length; i++) {         // Loop through radios
    addEvent(options[i], 'click', radioChanged);       // Add event listener
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';                // Is other checked?
    otherText.className = hide;                        // Text input visibility
    if (hide) {                                        // If text input hidden
      otherText.value = '';                            // Empty its contents
    }
  }
}());

// The script is placed into an IIFE
  // It begins by declaring and setting a series of variables
    // The first is called form and gets the #how-heard elements
    // The second is called options and gets the radio elements in the form list
    // The third is called other and gets the #other element
    // The fourth is called otherText and gets the #other-text element
    // The fifth is called hide
  // The otherText element has the .className() method called to set the class name to 'hide'

  // A for loop then goes through all of the elements in the options array
    // It then calls the addEvent() function on the options[i] element to fire on a click event, calling the radioChanged() function

  // The radioChanged() function is then declared
    // The function then uses a ternary operator to check if the checked property on the other element
      // If the #other box is checked then the hide variable is set to an empty string
      // If the #other box is NOT checked then the hide variable is set to 'hide'
      // The otherText element then has the .className() method called to set it to the value of the hide variable
      // An if statement then checks to see if the hide variable has a value, and if it does then the .value property of the otherText element is set to an empty string
