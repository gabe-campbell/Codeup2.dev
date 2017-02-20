// Create a variable called msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

// Call the function
updateMessage();

// This exercise creates a variable and sets its value to a string and then creates a function to update the document with the message
