(function($) {          // Use $ as a variable name
  $.fn.accordion = function(speed) {          // Return the jQuery selection
    this.on('click', '.accordion-control', function (e) {
      e.preventDefault();
      $(this)
        .next('accordion-panel')
        .not(':animated')
        .slideToggle(speed);
    });
    return this;                      // Return the jQuery selection
  };
}(jQuery));                           // Pass in the jQuery object

// Once the document has loaded, the accordion-plugin.js script is loaded
  // The script is wrapped in an IIFE that has been passed the $ to allow us to use the jQuery shorthand
    // $.fn.accordion is then used to create a function that has been passed speed as a parameter
      // The function places an event listener on this to fire on a click on the .accordion-control element, triggering an anonymous function that has been passed the event object
        // The function prevents the page from submitting
        // It then selects this and chains the .next() method to get the next .accordion-panel element, then chains the .not() method to filter out the panel that is animated, then it chains the .slideToggle() method and passes speed to it
    // The IIFE then returns this
  // The jQuery object is passed, allowing us to use the $ shorthand without conflict from other scripts

  // The last <script> tag on the document selects the .menu element and calls our .accordion  method on it, and passes 300 which will be used as the speed parameter
