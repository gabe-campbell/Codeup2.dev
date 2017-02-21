$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function() {
  $(this).remove();
});

// This exercise starts by selecting all of the heading elements and applies a class of headline to them
// It then selects the first three list items and immediately hides them, and then fades them into view over 1500 milliseconds
// It then adds a jQuery event listener which fires upon any click on an li element, calling an anonymous function
// The anonymous function uses the this keyword to get the target of the event and uses .remove() to remove it from the DOM
