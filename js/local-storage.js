// This example has been updated to use Modernizr - please note the use of localstorage in lowercase
if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localstorage.getItem('username');  // Elements populated
  txtAnswer.value = localstorage.getItem('answer');      // by localstorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
    localstorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Data saved on keyup
    localstorage.setItem('answer', txtAnswer.value);
  }, false);
}


// The script begins by using an if statement using Modernizr to see if local storage is supported by the browser
  // If it does not then the script ends
  // If it is then the script continues
    // Two variables are created and store references to DOM objects

    // The variables use the .value property to see if there is already value stored within the variables, if it is then it is written into the corresponding input

    // Two event listeners are then created to that are fired by inputs, and trigger anonymous functions
      // These functions then use the .setItem() method to take the information in the inputs and stores it in the storage object
