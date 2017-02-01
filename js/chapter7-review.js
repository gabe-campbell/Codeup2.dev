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

  // ITEM COUNTER
  function updateCount() {                    // Create function to update counter
    var items = $('li[class!=complete]').length;    // Number of items in list
    $('#counter').text(items);                // Added into counter circle
  }
  updateCount();                              // Call the function

  // SETUP FORM FOR NEW items
  $newItemButton.show();                      // Show the button
  $newItemForm.hide();                        // Hide the item FORM
  $('#showForm').on('click', function() {     // When click on add item button
    $newItemButton.hide();                    // Hide the new item button
    $newItemForm.show();                      // Show the new item form
    $textInput.focus();                     // Give the new item text input focus
  });

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

});
