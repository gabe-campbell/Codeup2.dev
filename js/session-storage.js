// This example has been updated to use Modernizr - please note the use of of lowercase in sessionstorage
if (Modernizr.sessionstorage) {

  var txtUsername = document.getElementById('username'),    // Get form Elements
      txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionstorage.getItem('username');   // Elements populated
  txtAnswer.value = sessionstorage.getItem('answer');       // by sessionstorage

  txtUsername.addEventListener('input', function() {        // Save data on keyup
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {         // Save data on keyup
    sessionstorage.setItem('answer', txtAnswer.value);
  }, false);
}


// The script begins by using an if statement using Modernizr to see if session storage is supported by the browser
  // If it does not then the script ends
  // If it is then the script continues
    // Two variables are created and store references to DOM objects

    // The variables use the .value property to see if there is already value stored within the variables, if it is then it is written into the corresponding input

    // Two event listeners are then created to that are fired by inputs, and trigger anonymous functions
      // These functions then use the .setItem() method to take the information in the inputs and stores it in the storage object
