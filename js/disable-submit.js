(function(){
  var form      = document.getElementById('newPwd');  // The form
  var password  = document.getElementById('pwd');     // Password input
  var submit    = document.getElementById('submit');  // Submit button

  var submitted = false;                            // Has form been submitted?
  submit.disabled = true;                           // Disable submit button
  submit.className = 'disabled';                    // Style submit button
  console.log(submit.className);

  // On input: Check whether or not to enable the submit button
  addEvent(password, 'input', function(e) {         // On input of password
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  });

  // On submit: Disable the form so it cannot be submitted again
  addEvent(form, 'submit', function(e) {            // On submit
    if (submit.disabled || submitted) {             // If disabled OR sent
      e.preventDefault();                           // Stop form submitting
      return;                                       // Stop processing function
    }                                               // Otherwise continue...
    submit.disabled = true;                         // Disable submit button
    submitted = true;                               // Update submitted var
    submit.className = 'disabled';                  // Update style

    // Demo purposes only: What would have been sent & show submit is disabled
    e.preventDefault();                             // Stop form submitting
    alert('Password is ' + password.value);         // Show the text
  });
}());

// The script is placed into an IIFE
  // It begins by declaring three variables and sets them to reference elements from the document
    // The first is called form and it gets the #newPwd element
    // The second is called password and it gets the #pwd element
    // The third is called submit and it gets the #submit element

  // Another variable called submitted is declared, taking a boolean value. It is set to false
  // The disabled attribute of the submit button is set to true, preventing it from submitting
  // The submit buttons class is then set to disabled
  // The submit buttons class name is then logged to the console

  // The addEvent() function is called on the password element, firing on an input and triggering an anoymous function that has been passed the event object
    // The function gets the target of the event
    // It then sets the .disabled property of the submit element to the value of the submitted variable or to no value if submitted has no value
    // A ternary operator then checks to see if the submit elements class name is submitted or if it has no value
      // If the conditional passes then the classname is set to disabled
      // If the conditional does not pass then the classname is set to enabled

  // The addEvent() function is called on the form element, firing on a submit and triggering an anonymouf function that has been passed the event object
    // The function uses an if statement to see if the submit.disabled property is true or if the submitted varaiable has is true
      // If either is true, then the form is prevented form submitting and the function returns
      // If neither is true then the script continues

    // The submit .disabled property is then set to true
    // The submitted variable is set to true
    // The submit elements .className property is set to disabled

    // The form is prevented form submitting
    // The user then gets an alert message showing a string with the password elements value
