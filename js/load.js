function setup() {    // Declare function
  var textInput;    // create variable
  textInput = document.getElementById('username')    // Get username input
  textInput.focus();    // Give username focus
}

window.addEventListener('load', setup, false);  // When page is loaded call setup()

/* LONGER VERSION WITH IE8 (and lower) compatibility

if (el.addEventListener) {
      el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onload', function(e){
      itemDone(e);
    });
}

*/

// This function uses an event listener on the window object to call on the setup() function once the page finishes loading
// setup() gets the username input and gives it focus once the page has loaded
