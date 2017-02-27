var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    debugger;             // A breakpoint is set if the developer tools are open
  }

  $form.append('<p>' + area + '</p>');
});

// The script begins by declaring a jQuery object and three variables
// The jQuery object is then set to reference the #calculator element

// An event listener is then created on the #calculator element and fired by a submit event, triggering an anonymous function that has been passed the event object
  // The function prevents the page from submitting
  // It then logs when the submit button was clicked to the console

  // The height and width variables are set to their corresponsing input values and the area is calculated

  // And if statement tests if the area is less than 100, and if so a breakpoint is set and the script is paused
  // Once the developer tools are closed the script will continue

  // A set of <p> tags is created and appended to the end of the form and will contain the value of the area
