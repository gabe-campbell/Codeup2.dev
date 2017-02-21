$(function() {
  var $listText = $('ul').text();
  $('ul').append('<p>' + $listText + '</p>');
});

// This script creates a variable and stores all of the text contained in the ul element
// It then appends the text to the end of the ul in a p tag
