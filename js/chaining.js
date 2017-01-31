// $('li[id!="one"]').hide().delay(500).fadeIn(1400);  // semi-colon indicated end of chaining - can be written on seperate lines
$('li[id="one"]').hide().delay(300).fadeIn(650);
$('li[id="two"]').hide().delay(450).fadeIn(650);
$('li[id="three"]').hide().delay(600).fadeIn(650);
$('li[id="four"]').hide().delay(750).fadeIn(650);
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');
