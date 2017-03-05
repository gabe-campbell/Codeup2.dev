(function() {

  var pwd = document.getElementById('pwd');     // Get password input
  var chk = document.getElementById('showPwd'); // Get checkbox

  addEvent(chk, 'change', function(e) {         // When user clicks on checkbox
    var target = e.target || e.srcElement;      // Get that element
    try {                                       // Try the following code block
      if (target.checked) {                     // If the checkbox is checked
        pwd.type = 'text';                      // Set pwd type to text
      } else {                                  // Otherwise
        pwd.type = 'password';                  // Set pwd type to password
      }
    } catch(error) {                            // If this causes an error
      alert('This browser cannot switch type'); // Say that cannot switch type
    }
  });

}());

// The script is placed in an IIFE
  // It begins by declaring two variables to reference elements from the page
    // The first is the pwd variable and it is set to the #pwd element
    // The second is the chk variable and it is set the #showPwd element

  // The addEvent() function is declared on the chk variable to fire on a change to the input, triggering an anonymous function that has been passed the event object
    // The function declares a variable called target and it gets the target of the event
    // It then uses a try/catch statement
      // An if/else statement in the try block checks to see if the chk element is checked
        // If it is then it sets the pwd elements input type to text
        // If it is not then it sets the pwd elements input type to password
      // The catch block checks to see if there is an error in the try block, and if there is it alerts the user that the input type cannot be switched (some browsers do not support the changing of input types)
