
var leftInput = document.getElementById('left-box');
var opInput = document.getElementById('operator');
var rightInput = document.getElementById('right-box');
var resultInput = document.getElementById('result');
var clearButton = document.getElementById('clear');
var equalsButton = document.getElementById('equals');
var decimalButton = document.getElementById('decimal');
var posNeg = document.getElementById('sign');
var numbers = document.getElementsByClassName('number');
var operands = document.getElementsByClassName('operand');

var msg = '';
var leftNum;
var rightNum;
var resultNum;
var numDecimal = 0;

var operation = [];


function setup() {
  $('#right-box').removeClass('current');
  $('#left-box').addClass('current');
  console.log('The calculator has been initialized');
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
  if ($('#left-box').hasClass('current')) {
    leftNum = msg;
    leftInput.value = leftNum;
  } else if ($('#right-box').hasClass('current')) {
    rightNum = msg;
    rightInput.value = rightNum;
  }
}

function clearInputs() {
  leftInput.value = '';
  opInput.value = '';
  rightInput.value = '';
  resultInput.value = '';
  leftNum = '';
  rightNum = '';
  msg = '';
  resultNum = '';
  numDecimal = 0;
  console.log('All inputs and strings have been cleared');
  $('#right-box').removeClass('current');
  setup();
}

function switchInputs() {
  if (leftNum) {
    $('#left-box').removeClass('current');
    $('#right-box').addClass('current')
    msg = '';
    numDecimal = 0;
  }
}

function getOperator(e) {
  var target = getTarget(e);
  operation[0] = target.value;
  opInput.value = operation[0];
}

function getResult() {
  switch(operation[0]) {
    case "+":
      resultNum = +leftNum + +rightNum;
      resultInput.value = resultNum;
      break;
    case "-":
      resultNum = leftNum - rightNum;
      resultInput.value = resultNum;
      break;
    case "*":
      resultNum = leftNum * rightNum;
      resultInput.value = resultNum;
      break;
    case "/":
      resultNum = leftNum / rightNum;
      resultInput.value = resultNum;
      break;
    default:
      console.log("Something went wrong...");
  }
}

function changeSign(e) {
  var target = getTarget(e);
  msg += target.value;
  msg = msg * -1;
  updateMsg(e);
}

function addDecimal() {
  if (numDecimal >= 1) {
    return;
  } else {
    msg += '.';
  }
}



for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(e) {
    updateMsg(e);
  }, false);
}
window.addEventListener('load', setup, false);
clearButton.addEventListener('click', clearInputs, false);
for (var i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', function(e) {
    switchInputs(e);
  }, false);
}
for (var i = 0; i < operands.length; i++) {
  operands[i].addEventListener('click', function(e) {
    getOperator(e);
  }, false);
}
equalsButton.addEventListener('click', getResult, false);
posNeg.addEventListener('click', function(e) {
  changeSign(e);
}, false);
decimalButton.addEventListener('click', addDecimal, false);




// The script begins by declaring a series of objects and sets them to reference elements on the document
  // The first references the #left-input box
  // The second references the #operand box
  // The third references the #right-input box
  // The fourth references the #clear button
  // The fifth references all elements with the .number class

  // A variable called msg is created and set to an empty string, and will be used to set the value of the text inputs
  // A series of empty strings are then declared and set to store the value that will be used in the operation
  // An empty array called operations is declared that will hold the value of the operator that was clicked on

// A function called setup() is then declared and defined to add the .current class to the left input element and log a message to the console
  // This function is then called later on down the script once the load event is fired on the window object

// A function called getTarget() is defined and passed the event object

// A for statement later down the page takes our referenced list of number buttons and goes through each one and creates an event listener to fire on a click event, calling the updateMsg() function and passes the event object as an argument

// The updateMsg() function is passed the event object and creates a variable called target that gets the value of the element that was clicked on
  // The value is then passed into the function and the msg event is built
  // An if statement then checks to see if the left input has the .current class, and if it does then the input value is set to the value of msg
  // If the leftInput does not have the .current class then the if else tests to see if the rightInput has the .current class, and if it does then the input value is set to the value of msg

// The function called clearInputs() is declared
  // This function sets the value of all three inputs and the msg string to empty strings
  // This function is called by a click event on the clear button
  // It then removes the .current class from the rightInput and calls setup() to reinitialize the calculator

// The function switchInputs() is declared
  // This function is triggered by a click on one of the operand buttons
  // It takes the #left-box and #right-box elements and swaps the 'current' class on them

// The getOperator() class is then declared
  //





// BONUS CHALLENGES:
  // Looks like we left the decimal point (.) button off our example. D'oh! You should fix that for us.
  // Use all the nifty CSS and HTML we have covered to really add some shine to your calculator. You might want to use anchor tags (<a>) instead of buttons to give yourself some more flexibility in terms of styling.
  // There are a few functions the Apple Calculator does that ours does not, including converting number to negative and percentages. In addition, there are dozens more you could add such as square roots, exponents, trigonometry, etc.
  // Convert the calculator to use Reverse Polish Notation. You may be surprised to discover this solution will take significantly less code and logic than our original solution! (For example, you would no longer need three separate input fields, just a simple textarea would work well.)
  // Add the ability to convert and calculate values in binary and/or hexadecimal (hint: parseInt() can actually do a lot of this for you).
