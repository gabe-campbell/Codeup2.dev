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
