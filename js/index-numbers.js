$(function() {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});


// The script uses a selector to find the li elements with an index number less than 2 and removes the 'hot' class from them
// It then uses a selector to find the li with an index number of 0 and adds the class 'complete' to it
// Finally, it finds the li elements with an index number greater than 2 and adds the class 'cool' to them
