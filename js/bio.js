(function () {
  var bio = $('#bio');
  var bioCounter = $('#bio-count');

  // show the counter when the field is focused and update the class
  // depending on amount of characters left
  bio.on('focus', updateCounter);
  bio.on('keyup', updateCounter);

  // when we leave the textarea, we hide the counter unless there are too many characters
  bio.on('blur', function () {
    if (bioCounter.text() >= 0) {
      bioCounter.addClass('hide');
    }
  });


  function updateCounter(e) {
    var count = 140 - bio.val().length;
    var status = '';
    if (count < 0) {
      status = 'error';
    } else if (count <= 15) {
      status = 'warn';
    } else {
      status = 'good';
    }

    // remove previous classes
    bioCounter.removeClass('error warn good hide');
    // add new class
    bioCounter.addClass(status);
    bioCounter.text(count);
  }

}());

// The script is placed into an IIFE
  // It begins by declaring two variable, which use jQuery selectors to reference elements on the page
    // The first is called bio and references the #bio element
    // The second is called bioCounter and references the #bio-count element

  // The script then place two event listeners on the bio element, fired by a focus or a keyup event on the input, triggering the updateCounter() function

  // A third event listener is placed on the bio elementand is fired by a blur event on the element, triggering an anonymous function
    // The function uses an if statement to run a block of code if the bioCounter elements text is greater than or equal to 0
      // If the condition passes, then the bioCounter has the .addClass() method called to add the class 'hide to it

  // A function called updateCounter() is then declared and is passed the event object
    // The function declares and sets two variables
      // The first is called count and is set to calculate the remaining characters from the number in the bio element input
      // The second is called status and is set to an empty string
      // An if statement then checks to see if the count variable is less than 0, less than or equal to 15, or greater than 15. it then sets the status string to 'error', 'warn', or 'good', respectively

    // The function then uses the .removeClass() method on the bioCounter element to remove the classes 'error warn good' and 'hide'
    // It then uses the .addClass() method to add the class the status variable is set to
    // It then sets the bioCounter elements text to the value of count
