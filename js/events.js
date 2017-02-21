$(function() {
  var ids = '';
  var $listItems = $('li');

  $listItems.on('mouseover click', function() {
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append(' <span class="priority">' + ids + '</span>');
  });

  $listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });

});

// This exercise creates an empty variable called ids and a jQuery object that holds a list all of the li elements
// It then creates a jQuery event listener that listens for any mouseover or click on any element in the $listItems li list and when it fires it calls an anonymous function
// The function takes the id from the target element, then removes all span tags from the $listItems list, and then appends and span with this id to then end of this li

// Another event listener fires when the mouse exits one of the element and triggers an anonymous function
// The function removes any span elements from this list item
