(function(){
  var form = document.getElementById('login');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.username.value;          // Select username entered
    var msg      = 'Welcome ' + username;            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());

// The script is stored in an IIFE
  // It begins by declaring a variable called form that gets the #login element

  // The addEvent() function from the utilities.js file is accessed and passed the element that the event listener is being placed on (the 'form' elements is placed into the value of the 'el' parameter in the function declaration), the event that is occurring, and the function that is to be called once the event is fired
    // The function is anonymous and is passed the event objectd
      // It prevents the form from submitting
      // It then declares a variable and sets it to get this form elements, meaning all of the elements within the form tags
      // It then declars a variable called username and sets it to equal the value of the 'username' element within the elements list
      // A variable called msg is then created and set to equal string with the value of the username variable
      // The #main element is then selected in the DOM and its text is set to the value of msg
