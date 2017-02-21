$(function() {
  $('ul').before('<p class="notice">Just updated</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  $('li:last').after($newListItem);
});


// This script starts by adding a paragraph element BEFORE the ul
// It then selects all li with a class of hot and adds a '+ ' before each item
// It then creates a variable and creates a new jQuery object containing an li element and then adds it after the last li in the list
