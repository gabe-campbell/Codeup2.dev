$(function() {
  var $listItemHTML = $('li').html();
  $('li').append('<i>' + $listItemHTML + '</i>');
});

// This script creates a variable and uses an selector to select all li elements, and the .html() method stores the content of the first li
// It then selects all of the li elements and appends the stored HTML to the end of each
