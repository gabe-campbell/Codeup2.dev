var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // The message only shows if user has entered number less than 10
  console.assert(this.value > 10, 'User entered a value less than 10');
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;
  // The message only shows if user has not entered a number
  console.assert($.isNumeric(area), 'User entered a non-numeric value');

  $form.append('<p>' + height + ' x ' + width + ' = ' + area + '</p>');

});

// The script begins by creating a jQuery object with a reference to #calculator and several variables
// An event listener is created on the text inputs within the form and is fired by a blur event, triggering an anonymous function
  // The function uses console.assert to test if the value entered into the input is greater than 10, if not then an assert message is logged to the console
// A second event listener is fired on a form submit, triggering an anonymous function that has been passed the event object
  // The function prevents the page from submitting
  // It then logs when the submit button was Clicked

  // The width and height variables are then set to their corresponsing input values
  // The area is then calculated
  // Another console.assert is used to test if the area is a numeric value, if it is not then an assert message is logged to the console
  // A set of <p> tags containing the area is then appended to the end of the form
