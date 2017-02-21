$(function() {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var $textInput = $('input:text');
  var item = '';                              // item is an empty string
  $list = $('ul');                            // cache the unordered list
  $newItemForm = $('#newItemForm');           // Cache form to add new items
  $newItemButton = $('#newItemButton');        // Cache button to show form

  $('li').hide().each(function(index) {       // Hide list items
  $(this).delay(450 * index).fadeIn(1600);    // Then fade them in
  });

  // This part of the script begins by declaring a series of jQuery objects
  // It then declares and sets an object to the text from the input
  // A variable is created and set to an empty string
  // The $list object references the ul element; the $newItemForm references the 'newItemForm' element; the $newItemButton references the 'newItemButton' element

  // A selector finds all of the list items and immediately hides them, and then does a .each() function which is passed the index of the li elements
  // The function then uses the index to calculate the delay before the li is faded in

  // ITEM COUNTER
  function updateCount() {                    // Create function to update counter
    var items = $('li[class!=complete]').length;    // Number of items in list
    $('#counter').text(items);                // Added into counter circle
  }
  updateCount();                              // Call the function

  // This function creates a variable called items which is used to find the number of li that do not have a class of 'complete'
  // The #counter element is then selected and set to the number of items
  // The function is then called

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                      // Show the button
  $newItemForm.hide();                        // Hide the item form
  $('#showForm').on('click', function() {     // When click on add item button
    $newItemButton.hide();                    // Hide the new item button
    $newItemForm.show();                      // Show the new item form
    $textInput.focus();                     // Give the new item text input focus
  });

  // The $newItemButton and $newItemForm objects are then set to show/hide, respectively
  // An event listener on the #showForm element is fired by a click, triggering an anonymous function
  // The function toggles the show/hide states of the $newItemButton and $newItemForm and gives focus to the textInput

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {     // When a new item is submitted
    e.preventDefault();                       // Prevent the form from being submitted
    var text = $('input:text').val();         // Get value of text input
    $list.append('<li>' + text + '</li>');    // Add item to the end of the list
    $('input:text').val('');                  // Empty the text input
    updateCount();                            // Update the counter
    $newItemForm.hide();                      // These two lines reintroduce the ability to hide/show the needed elements
    $newItemButton.show();
  });

  // An event listener on the $newItemForm is fired by the submit, triggering an anonymous function that has been passed the event object
  // The function prevents the form from submitting
  // It then creates a variable which holds the value of the text input
  // A new li containing the text input is created and appended to the list
  // The text input is then cleared
  // updateCount() is called
  // Then $newItemForm and $newItemButton are toggled again

  // CLICK HANDLING - USES DELEGATION ON <ul> element
  $list.on('click', 'li', function() {
    var $this = $(this);                      // Cache the element into a jQuery object
    var complete = $this.hasClass('complete');  // It is now complete

    if (complete === true) {                  // Check if the item is complete
      $this.animate({                         // If so, animate opacity + paddingLeft
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {           // Use callback when animation is complete
        $this.remove();                       // Then completely remove this item
      });
    } else {                                  // Otherwise indicate it is complete
      item = $this.text();                    // Get the text from the list item
      $this.remove();                         // Remove the list item
      $list                                   // Add back to the end of the list as complete
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);                  // Hide it so that it can be faded in
        updateCount();                        // Update the counter
    }                                         // End of else option
  });                                         // End of event handler

  // An event listener is created on the $list object on the li elements that it contains firing on a click event, triggering an anonymous function to be called
  // The function creates a jQuery object which gets the value of this elements
  // A new variable is created that gives this the class of 'complete'

  // An if/else statement tests if the clicked object has the class 'complete'
    // If it does, then the element is animated and then removed from the DOM
    // If it does not, then the value of this text is added to the item string, and this element is removed from the Dom
    // The $list object is then selected and is appended with a new li with the class 'complete' and containing the text from the element that was removed
    // It is first hidden and then faded in
    // updateCount() is then called
});
