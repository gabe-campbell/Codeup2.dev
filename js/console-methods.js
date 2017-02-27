console.info('And we\'re off...');          // Info: script is running

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {      // On blur event
  console.warn('You entered ', this.value);       // Warn: what was entered
});

$('#calculator').on('submit', function(e) {       // When for, is submitted
  e.preventDefault();

  width = $('#width').val();
  height = $('#height').val();

  area = width * height;
  console.error(area);                            // Error: show area

  $form.append('<p class="result">' + area + '</p>');
});


// The script begins by logging a message to the console

// It then creates a jQuery object and several variables
// The jQuery object is set to reference the #calculator element

// An event listener is then created on the text inputs within the form that listen for the element to lose focus, triggering an anonymous function
  // The function logs a warning message to the console with this value that triggered the event

// Another event listener is created on the #calculator element that is fired upon a submit, triggering an anonymous function that has been passed the event object
  // The function prevents the page from submitting
  // It the sets the height and width and the values that were entered into the corresponding inputs

  // The area is the calculated and logged as a warning message to the console

  // A set of <p> tags are then appended to the page with the value of the result
