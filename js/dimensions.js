$(function() {
  var listHeight = $('#page').height();

  $('ul').append('<p>Height: ' + listHeight + 'px</p>');
  $('li').width('50%');
  $('li#one').width(125);
  $('li#two').width('60%');
  $('li#three').width('18em');
})

// This script creates a variable that is set to the height value of the #page element

// A selector then gets the ul element and appends a paragraph tag containing the height variable after the list
// The next selector sets the width of all li elements to 50% of their container
// The next selector chooses the li with an id of 'one' and sets its width to 125 pixels
// The next selector chooses the li with an id of 'two' and sets its width to 60% of its container
// The next selector chooses the li with an id of 'three' and sets its width to 18em
