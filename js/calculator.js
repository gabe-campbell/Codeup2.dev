
var leftInput = document.getElementById('left-box');
var operand = document.getElementById('operand');
var rightInput = document.getElementById('right-box');
var msg = '';

var numbers = document.getElementsByClassName('number');

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
  // if (leftInput.hasClass("current")) {
  //   leftInput.value = msg;
  // } else if (rightInput.hasClass("current")) {
  //   rightInput.value = msg;
  // }
  console.log(msg);
  if ($('#left-box').hasClass('current')) {
    leftInput.value = msg;
  } else if ($('#right-box').hasClass('current')) {
    rightInput.value = msg;
  }
}

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(e) {
    updateMsg(e);
  }, false);
}
window.addEventListener('load', setup, false);



// for (var i = 0; i < numbers.length)
// The script begins by giving references to the different inputs
// The left input is given focus with the setup() function on the window load
// A function called updateMsg is called that will start building the message
  // A variable called numMsg holds any empty string
  // An if statement tests to see if the leftInput has focus
    // If it does, then the msg will be built and sent to the left input
    // Else if the right input has focus, then the msg will be built and sent to the right input

//
