(function() {
  var form     = document.getElementById('interests'); // Get form
  var elements = form.elements;                      // All elements in form
  var options  = elements.genre;                     // Array: genre checkboxes
  var all      = document.getElementById('all');     // The 'All' checkbox

  function updateAll() {
    for (var i = 0; i < options.length; i++) {       // Loop through checkboxes
      options[i].checked = all.checked;              // Update checked property
      console.log(options[i].name);
    }
  }
  addEvent(all, 'change', updateAll);                // Add event listener

  function clearAllOption(e) {
    var target = e.target || e.srcElement;           // Get target of event
    if (!target.checked) {                           // If not checked
      all.checked = false;                           // Uncheck 'All' checkbox
    }
  }
  for (var i = 0; i < options.length; i++) {         // Loop through checkboxes
    addEvent(options[i], 'change', clearAllOption);  // Add event listener
  }

}());

// The script is placed into an IIFE
  // It begins by declaring and setting four variables
    // The first references the #interests element
    // The second gets a list of all nested elements within the form element
    // The third gets an array of all the genres in the elements list
    // The fourth gets the #all element

  // A function called updateAll() is declared
    // The function uses a for loop to go through all of the elements in the options Array
      // For each item, it sets its checked property to the current checked property of the all element
      // It then logs the name of the element that was changed
  // The addEvent() function is then called used on the #all element to fire on a change, triggering the updateAll() function on it

  // The clearAllOption() function is declared and passed the event object
    // The function gets the target of the event
    // It then checks to see if the target is not checked
      // If the target of the event is NOT checked, then the checked property of the #all element is set to false
    // A for loop then loops through all of the elements
      // It calls the addEvent() function on options[i] (the current index in the options array) and fires on a change, calling the clearAllOption() function
