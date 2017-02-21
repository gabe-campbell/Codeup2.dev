$(function() {

  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');

  $newItemButton.show();
  $newItemForm.hide();

  $('#showForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
    $textInput.focus();
  });

  $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $textInput.val();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });

});

// This script starts by declaring and setting 3 variables to reference 2 elements and an input from the document
// It then shows the newItemButton and hides the newItemForm

// An event listener is added on the #showForm id element which fires on a click event, triggering an anonymous function
// The function toggles which elements are shown/hidden making the button now hide, showing the form, and giving the input focus

// An event listener is placed on the newItemForm jQuery object that listens for a submit of the form which triggers an anonymous function that has been passed the event object
// The function prevents the form from submitting and creates a new variable which is set to the value of the textInput
// A jQuery selector gets the last li element and appends a new list item holding the value from the textInput
// The forms and buttons are once again toggled back to their original state and the textInput is cleared
