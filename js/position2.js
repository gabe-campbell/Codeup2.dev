$(function() {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500;

  $window.on('scroll',  function() {

    if (endZone < $window.scrollTop()) {
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});

// This script creates and sets 2 jQuery objects and 1 variable
// The first object selects the window objects; the second selects the element with an id of 'slideAd'; and the variable calculates the height of the element and stores it

// An event listener is created and is fired by a scroll, triggering an anonymous function
// The function calls an if/else statement which determines if the users position is further from the top of the page than the end zone
  // If the conditional evaluates to true then the #slideAd element is animated in from the right side of the page
  // If the conditional evaluates to false or if the element is in the middle of the animation then the .stop() method is called and the element is animated back off of the page
