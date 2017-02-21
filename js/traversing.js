$(function() {
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append('<a class="show">show</a>');

  $h2.on('click', function() {
    $h2.next('ul')
      .fadeIn(500)
      .children('.hot')
      .addClass('complete');
    $h2.find('a').fadeOut();
  });

});

// The script creates a jQuery object that stores a reference to the h2 element
// It then immediately hides the ul
// It then appends the stored h2 reference with an a tag
// A jQuery event listener is then created on the h2 reference and fires upon a click event; triggering an anonymous function
// The fucnction selects the next ul element after the h2 is clicked and fades it in
// It then finds all children of the ul element with a class of 'hot' and adds a class called 'complete'
// The function then finds any a elements and fades them out
