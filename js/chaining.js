// $('li[id!="one"]').hide().delay(500).fadeIn(1400);  // semi-colon indicated end of chaining - can be written on seperate lines
$('li[id="one"]').hide().delay(300).fadeIn(650);
$('li[id="two"]').hide().delay(450).fadeIn(650);
$('li[id="three"]').hide().delay(600).fadeIn(650);
$('li[id="four"]').hide().delay(750).fadeIn(650);
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');

// This exercise shows how to select list items with a specific id and then chains several jQuery methods together on one line, causing the selected elements to be immediately hidden and then faded in after a short delay
// The script then demonstrates using jQuery to select child elements and other class elements
