// NOTE: This example will not work locally:
// In Chrome / IE / Safari you may experience problems because of cross-domain restrictions.
// In Firefox, content may load but styles may not be applied.
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // URL to load
  var $content = $('#content');                             // Cache selection

  $('nav a.current').removeClass('current');                // Update links
  $(this).addClass('current');
  $('#container').remove();                                 // Remove content

  $.ajax({
    type: "GET",                                            // GET or POST
    url: url,                                               // Path to file
    timeout: 2000,                                          // Waiting time
    beforeSend: function() {                                // Before Ajax
      $content.append('<div id="load">Loading</div>');      // Load message
    },
    complete: function() {                                  // Once finished
      $('#load').remove();                                  // Clear message
    },
    success: function(data) {                               // Show content
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    error: function() {                                     // Show error msg
      $content.html('<div id="container">Please try again soon.</div>');
    }
  });

});

/*
 Here is some further information on what happens when the call is successful:

 success: function(data) {...  The data parameter holds the Ajax response with the new content
 $content was stored on line 10 it is the element whose id attribut has a value of content
 $content.html() updates the HTML inside this element
 $(data) creates a jQuery object containing the response.
 .find('#container') gets the container element from that response hides it and fades it in
*/


// The script starts by creating an event listener on the link tags in the nav element firing on a click, triggering an anonymous function that has been passed the event object as a parameter
  // The function first prevents the page from submitting
  // It then declares and sets a variable that is set to this href attribute of the link that was clicked
  // A jQuery object is then created that references the #content element
  // A selector finds the <a> with a class of 'current' and removes the class from it
  // It then adds a class of 'current' to this link
  // A selector finds the #container element and removes it from the DOM

  // A $.ajax() request is then created
    // It first contains the type of request it is - a GET or POST - and in this case it is a GET request
    // It then sets the url to the url variable that was created (holding this href)
    // It then sets a timeout property for the the request to wait two seconds before the response
    // The beforeSend property is set to an anonymous function that takes the cached $content element and adds and <div> to it telling the user that the content is loading
    // Once the request is completed an anonymous function removes the <div> that was created in the beforeSend step
    // On success an anonymous function that ahs been passed data as a parameter is called
      // The function takes the cached $content element and sets its HTML to find the #container element of the link that was clicked
      // The content is immediately hidden and then faded in
    // On error an anonymous function sets the HTML of the cached $content element to a <div> that tells the user to try again later
