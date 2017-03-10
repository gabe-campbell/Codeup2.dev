
var leftInput = document.getElementById('left-box');
var operand = document.getElementById('operand');
var rightInput = document.getElementById('right-box');
var clearButton = document.getElementById('clear');
var numbers = document.getElementsByClassName('number');

var msg = '';


function setup() {
  $('#left-box').addClass('current');
  console.log('The left input is the current input');
}


function getTarget(e) {
  if (!e) {                                      // If there is no event object
    e = window.event;                            // Use old IE event object
  }
  return e.target || e.srcElement;               // Get the target of event
}

function updateMsg(e) {
  var target = getTarget(e);
  msg += target.value;
  console.log(msg);
  if ($('#left-box').hasClass('current')) {
    leftInput.value = msg;
  } else if ($('#right-box').hasClass('current')) {
    rightInput.value = msg;
  }
}

function clearInputs() {
  leftInput.value = '';
  operand.value = '';
  rightInput.value = '';
  msg = '';
  console.log('All inputs and msg have been cleared');
}

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(e) {
    updateMsg(e);
  }, false);
}
window.addEventListener('load', setup, false);
clearButton.addEventListener('click', function(e) {
  clearInputs(e);
}, false);



// The script begins by declaring a series of objects and sets them to reference elements on the document
  // The first references the #left-input box
  // The second references the #operand box
  // The third references the #right-input box
  // The fourth references the #clear button
  // The fifth references all elements with the .button class

  // A variable called msg is created and set to an empty string, and will be used to set the value of the text inputs

// A function called setup() is then declared and defined to add the .current class to the left input element and log a message to the console
  // This function is then called later on down the script once the load event is fired on the window object

// A function called getTarget() is defined and passed the event object

// A for statement later down the page takes our referenced list of number buttons and goes through each one and creates an event listener to fire on a click event, calling the updateMsg() function and passes the event object as an argument

// The updateMsg() function is passed the event object and creates a variable called target that gets the value of the element that was clicked on
  // The value is then passed into the function and the msg event is built
  // An if statement then checks to see if the left input has the .current class, and if it does then the input value is set to the value of msg
  // If the leftInput does not have the .current class then the if else tests to see if the rightInput has the .current class, and if it does then the input value is set to the value of msg
