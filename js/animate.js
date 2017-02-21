$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 1000, function() {
      $(this).remove();
    });
  });
});

// This script creates an event listener on all the li elements that fires upon a click event, triggering a function that causes a CSS animation on this li
// The animation causes the this li to go to 0.0 opacicty and to increase the padding by 8- pixels over the course of 1000 milliseconds
// After the animation has completed an additional function is triggered and removes this li from the DOM
