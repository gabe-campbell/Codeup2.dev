function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event) {
  var message = 'You have changes that have not been saved';
  (event || window.event).returnValue = message;
  return message;
});

// This exercise has two event listeners

// The first event listener is on the window object and fires when the DOM is loaded, calling setup()
// setup() gives the text input focus

// The second event listener is also on the window object and fires once the page is submitted, but before it is unloaded, calling an anonymous function
// The anonymous function creates a window event which prompts the user to confirm they would like to stay on the page or leave it
