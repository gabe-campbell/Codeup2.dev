$(function() {
  var $listItemText = $('li').text();
  $('li').append('<i>' + $listItemText + '</i>');
});

// This script selects all of the li elements and stores their text in a variable
// It then selects all of the li elements and appends the stored text to each
