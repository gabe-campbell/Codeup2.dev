var $form = $('#calculator');

$form.on('submit', function(e) {                 // Runs when submit is pressed
  e.preventDefault();
  console.log('Clicked submit...');              // Show the button was clicked

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

  console.group('Area calculations');            // Start grouping
    console.info('Width ', width);               // Write out the width
    console.info('Height ', height);             // Write out the height
    console.log(area);                           // Write out the area
  console.groupEnd();                            // End group

  $form.append('<p>' + area + '</p>');
});


// The script begins by creating a jQuery object that references the #calculator element

// An event listener is placed on the $form object and is fired by a submit, triggering an anonymous function that ahs been passed the event object
  // The function prevents the page from submitting
  // It then logs when the submit button was clicked to the console
  // Several variables are then created and set to the values of their corresponding inputs and the area is then calculated and set

  // A console.group is then created, grouping together a series of console.logs until the .groupEnd() method is called
    // The console.logs log the different variables to the console

  // The $form object is then appended with a set of <p> tags containing the value of the area
