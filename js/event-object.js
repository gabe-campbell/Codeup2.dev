$(function() {

  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });

});

// This script creates a jQuery event listener on all li elements, which fires on any click event and triggers an anonymous function that is passed the event object
// The function selects all li with a span and removes the span from the DOM
// It then creates a new Date() object
// When the event is triggered, a timestamp is created for the date that the element is clicked
// The timestamp is then converted into a Date string and then is appended in a span to the end of this li with the type of event that occurred
