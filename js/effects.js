$(function() {

  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(500 * index).fadeIn(150);
  });

  $li.on('click', function() {
    $(this).fadeOut(700);
  });

});

// This function selects the h2 element and immediately hides it and then animates it to slide down
// It selects all of the li elements and also hides them and then to each applies an anonymous function, which is passed the index of the li as a parameter
// The function calculates and applies a delay using the index number of this li before the element is faded in

// An event listener is created on all of li elements which fires upon a click event, triggering an anonymous function
// The function calls the fadeOut() method on this li that was clicked and removes it from the DOM
