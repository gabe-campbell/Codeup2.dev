$(function() {
  var $listItems = $('li');

  $listItems.filter('.hot:last').removeClass('hot');
  $('li:not(.hot)').addClass('cool');
  $listItems.has('em').addClass('complete');

  $listItems.each(function() {
    var $this = $(this);
    if ($this.is('.hot')) {
      $this.prepend('Priority item: ');
    }
  });

  $('li:contains("honey")').append(' (local)');
});

// This script start by creating a jQuery object storing all li elements
// It then uses the .filter() method to find the last element with a 'hot' class and removes the class from it
// It then finds all li with an em tag and adds a class of 'complete' to them

// A function is then applied to each li in the jQuery object
// The function creates a jQuery object which stores this elements
// An if statement then checks if this has a class of 'hot' and if it does then it prepends it with text

// A jQuery selector is then used to find all li elements that contain the word 'honey' and appends text to the end of them
