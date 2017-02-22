// NOTE: This example will not work locally in all browsers.
// In Chrome, if you try this locally, you may get an error along the lines of:
//       Origin 'null' is therefore not allowed access.
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.


$('nav a').on('click', function(e) {        // User clicks nav link
  e.preventDefault();                       // Stop loading new link
  var url = this.href;                      // Get value of href

  $('nav a.current').removeClass('current');  // Clear current indicator
  $(this).addClass('current');              // New current indicator

  $('#container').remove();                 // Remove old content
  $('#content').load(url + '#container').hide().fadeIn('slow');      // New content
});

// The script starts by adding an event listener to all <a> tags that are the children of the <nav> tag and fires on a click, triggering an anonymous function which has been passed the event object
// The function prevents the link from submitting
// A variable is created which hold the value of this href

// A selector finds the <a> tag with a class of 'current' and removes the class from it
// It then adds the class 'current' to this <a> tag

// A selector finds the element with an id of 'container' and removes it from the DOM
// A selector finds the element with an id of 'content' and uses the .load()
  // The .load() method uses the url variable (which contains the this href) and concatenates it to load the #container from the corresponding page into the #content element
  // The #container is immediately hidden and then faded in

// This exercise shows how to load content from another page into the current page without reloading or moving to the new page
