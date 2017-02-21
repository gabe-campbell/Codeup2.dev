$(function() {
  var $p = $('p');

  // Create a clone of the <p> element and add i after the <h2> element
  var $clonedQuote = $p.clone();
  $p.remove();
  $clonedQuote.insertAfter('h2');

  // Remove first item, and add it to the end of the list;
  // Note how this happens in both lists.
  var $moveItem = $('#one').detach();
  $moveItem.appendTo('ul');

});

// This script creates a jQuery object which references all of the p tags on the page
// A new jQuery object is created and is set to clone the p tag object that was originally created, and then the original p tag is removed from the DOM
// The cloned quote is then inserted after the h2 element

// A new jQuery object is created which references the element with an id of 'one', it is then detached from the DOM and then reinserted at the end of the ul

// This script ultimately copies the quote that was originally at the bottom of the page, and moves it to under the heading. It then takes the first list item and moves it to the end of the list
