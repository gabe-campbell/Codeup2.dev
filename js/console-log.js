console.log('And we\'re off...');         // indicates script is runnning

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {      // When input loses focus
  console.log('You entered ', this.value);        // Write value to console
});

$('#calculator').on('submit', function(e) {       // When user clicks submit
  e.preventDefault();                             // When the user clicks submit
  console.log('Clicked submit...');               // Indicate button was Clicked

  width = $('#width').val();
  console.log('Width' + width);                   // Write width to console

  height = $('#height').val();
  console.log('Height' + height);                 // Write height to the console

  area = width * height;
  console.log(area);                              // Write area to the console

  $form.append('<p>' + area + '</p>');
});

// The script begins by logging a message to the console
// It then declares a jQuery object and several variables
// The jQuery object is set to reference the #calculator element

// An event listener is places on the #calculator form and listens for a submit that triggers an anonymous function that has been passed the event object
  // The function prevents the page from submitting
  // It then logs a message when the submit button was Clicked

  // The width is then set to the value within the #width input
  // The width is then logged to the console

  // The height is then set to the value fot he #height input
  // The height is then logged to the console

  // The area is then calculated and set and then logged to the console

  // A set of p tags is appended to the form and contains the value of the area
