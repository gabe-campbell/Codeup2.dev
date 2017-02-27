$(function() {

  $('#arrival').datepicker();       // Turn input to JQUI datepicker

  var $amount = $('#amount');       // Cache the price input
  var $range = $('#price-range').slider({       // Turn price-range into a slider
    range: true,          // If it is a range it gets two handles
    min: 0,               // Minimum value
    max: 400,             // Maxiumum value
    values: [100, 300],   // Values to use when the page loads
    slide: function(event, ui) {      // When slider used update amount element
      $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });
  $amount                 // Set initial values of amount element
  .val('$' + $range.slider('values', 0)       // A $ sign then lower range
  + ' - $' + $range.slider('values', 1));     // A $ sign then higher range

});

// This script begins with a selector that gets the #arrival input and uses the .datepicker() method to turn it into a date picker
// It then creates a jQuery object called $amount which is set to reference the #amount element
// Another jQuery object is then created on the #price-range input and uses the .slider() method to turn it into a slider
  // This also calls for several properties to be set to control the appearance and function of the slider
    // The first property is called range and it takes a boolean that controls if the the slider gets one handle (false) or two handles (true)
    // The next property is called minimum and it takes a number that controls the smallest amount the slider can be set to
    // The next property is called maximum and it takes a number that controls the largest amount the slider can be set to
    // The next property is called values and it takes two numbers in the [number1, number2] format and is used to set the inital values the sliders are set to upon page load
    // The final property is an anonymous function that is used to listen for a change on the slider and then updates the #amount element accordingly
// The next line uses the $amount object to set the #amount element to the correct initial values
