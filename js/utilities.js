// Helper function to add an event listener
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // If addEventListener works
    el.addEventListener(event, callback, false);   // Use it
  } else {                                         // Otherwise
    el['e' + event + callback] = callback;         // CreateIE fallback
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}

// Helper function to remove an event listener
function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {                      // If removeEventListener works
    el.removeEventListener(event, callback, false);       // Use it
  } else {                                                // Otherwise
    el.detachEvent('on' + event, el[event + callback]);   // Create IE fallback
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}

// The script declares and sets two functions
  // The first is called addEvent() and is passed three parameters - el, event, and callback
    // The function uses an if statement to see if the addEventListener() method is available
      // If it is, then the addEventListener() method is called on the el and passed event, callback, and false as arguments
      // If it is not, then the IE fallback is created and used
    // The attachEvent() method is then used on the el and passed 'on' plus the event occurring, then the callback event on the el

  // The second function is called removeEvent() and it takes the same parameters as the addEvent() function
    // An if statement first tests to see if the addEventListener() method is supported
      // If it is then it is used on the el and passed the event, the callback function, and the bubbling/capture state is set to false
      // If it is not then the IE fallback is used instead
