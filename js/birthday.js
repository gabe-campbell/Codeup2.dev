(function () {
  var $birth = $('#birthday');                         // D-O-B input
  var $parentsConsent = $('#parents-consent');         // Consent checkbox
  var $consentContainer = $('#consent-container');     // Checkbox container

  // Create the date picker using jQuery UI
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

  $birth.on('blur change', checkDate);                 // D-O-B loses focus

  function checkDate() {                               // Declare checkDate()
    var dob = this.value.split('-');                   // Array from date
    // Pass toggleParentsConsent() the date of birth as a date object
    toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
  }

  function toggleParentsConsent(date) {                 // Declare function
    if (isNaN(date)) return;                            // Stop if date invalid
    var now = new Date();                               // New date obj: today
    // If diff less than 13 years (ms * seconds * mins * hours * days * years)
    // does not account for leap years!
    // if the user is less than 13 we show parents consent tickbox
    if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {
      $consentContainer.removeClass('hide');            // Remove hide class
      $parentsConsent.focus();                          // Give it focus
    } else {                                            // Otherwise
      $consentContainer.addClass('hide');               // Add hide to class
      $parentsConsent.prop('checked', false);           // Set checked to false
    }
  }
}());

// The script is stored in an IIFE
  // It begins by declaring three jQuery objects
    // The first is called $birth and stores a reference to the #birthday element
    // The second is called #$parentsConsent and stores a reference to the #parents-consent element
    // The third is called $consentContainer and stores a reference to the #consent-container element

  // The script then uses the .prop() method on the $birth object to set the data 'type' to 'text'
    // It then chains the .data() method to it, passing the 'type' of 'date' and the .datepicker() method to change the input to a date picker

  // The function called checkDate() is then declared
    // It creates a variable called dob that is set to this value and chains the .split() method to it to take the string from the date picker and to split it on every instance of the '-' symbol
    // The toggleParentsConsent() function is called and passed a new Date object, which itself is passed the dob array that was just created

  // The function toggleParentsConsent() is declared and passed date as a parameter
    // The function uses an if statement to test if the date that was inputted is Nan
      // If it is !NaN then the function continues
      // If it is NaN then the function stops and returns
    // A variable called now is declared and set to a new Date object

    // An if statement calculates if todays date - the date variable that was inputted is less then 13 years
      // If the condition passes:
        // Then the $consentContainer object has the .removeClass() method called on it to remove the 'hide' class
        // The $parentsConsent object is then given .focus()
      // If the condition fails:
        // The $consentContainer object has the .addClass() method called on it to add the 'hide' class
        // The $parentsConsent object has the .prop() method called to set its 'checked' property to false
