$('.accordion').on('click', '.accordion-control', function(e) {   // When clicked
  e.preventDefault();     // Prevent default action of the button
  $(this)       // Get the element the user clicked on
    .next('.accordion-panel')     // Select the following panel
    .not(':animated')             // If it is not currently animating
    .slideToggle();               // Use slide toggle to show or hide it
});


// The script begins with an event listener on the .accordion element that fires upon a click on the .accordion-control element, triggering an anonymous function that has has the event object passed to it
  // The function first prevents the link from submitting
  // It then gets this object and applies three methods to it
    // The first sets the next panel to be shown using the .next() method on the .accordion-panel element
    // It the uses a .not() method to prevent the third method from occuring if the accordion is currently being animated
    // If it passes the previous method, .slideToggle() shows or hides the panel that was selected
