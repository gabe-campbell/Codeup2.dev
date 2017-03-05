(function() {                                        // Place code in an IIFE
  // Test: Create an input element, and see if the placeholder is supported
  if ('placeholder' in document.createElement('input')) {
    return;
  }

  var length = document.forms.length;               // Get number of forms
  for (var i = 0; i < length; i++ ) {               // Loop through each one - updated shorter syntax
    showPlaceholder(document.forms[i].elements);    // Call showPlaceholder()
  }

  function showPlaceholder(elements) {              // Declare function
    for (var i = 0, l = elements.length; i < l; i++) { // For each element
      var el = elements[i];                         // Store that element

      if (!el.placeholder) {                        // If no placeholder set
        continue;                                   // Go to next element
      }                                             // Otherwise

      el.style.color = '#666666';                      // Set text to gray
      el.value = el.placeholder;                    // Add placeholder text

      addEvent(el, 'focus', function () {           // If it gains focus
        if (this.value === this.placeholder) {      // If value=placeholder
          this.value = '';                          // Empty text input
          this.style.color = '#000000';                // Make text black
        }
      });

      addEvent(el, 'blur', function () {            // On blur event
        if (this.value === '') {                    // If the input is empty
          this.value = this.placeholder;            // Make value placeholder
          this.style.color = '#666666';                      // Set text to gray
        }
      });
    }                                                // End of for loop
  }                                                  // End showPlaceholder()
}());

// The script is placed into an IIFE
  // It begins by using an if statement to see if the placeholder attribute is supported, if it is then the statement returns

  // A variable called length is created and set to the number of elements in the forms list
  // A for loop then loops through to the number of elements in the length variable
    // the showPlaceholder() function is called and passed the forms[i].elements

  // The showPlaceholder() function is declared and passed elements as a parameter
    // A for loop then goes through all of the elements
      // It then creates an el that is set to elements[i]

      // An if statement the checks to see if there is NOT a placeholder set for the current element
        // If it is not then the loop continues
        // If it is then
          // The elements color attribute is set
          // The elements value is set to the placeholder value

          // The addEvent() function is called on the current element to fire on when it gains focus, triggering an anonymous function
            // The function uses an if statement to see if this value is equal to this placeholder value
              // If it is then this value is cleared
              // The this color is set to black

          // The addEvent() function is called on the current element to fire when it loses focus, triggering an anoymous function
            // The function uses an if statement to check if this value is empty
              // If it is then this value is set to the placeholder text
              // The this color is set to grey
// This script has two event listeners that are used to call functions when the inputs gain or lose focus
  // If the text field is blank then the input values are set to the value of the placeholder text
  // If the input value is set to the placeholder text then the texts color is set to grey
