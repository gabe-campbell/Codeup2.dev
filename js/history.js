// NOTE: Because this example uses jQuery's load() method (as introduced in the previous chapter)
// It will not work locally in some browsers
// You can try it online at http://javascriptbook.com/code/c09
// or run it on your own web server

$(function() {                                  // DOM has loaded
  function loadContent(url){                    // Load new content into page
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // Click handler
    e.preventDefault();                         // Stop link loading new page
    var href = this.href;                       // Get href attribute of link
    var $this = $(this);                        // Store link in jQuery object
    $('a').removeClass('current');              // Remove current from links
    $this.addClass('current');                  // Update current link
    loadContent(href);                          // Call function: loads content
    history.pushState('', $this.text, href);    // Update history
  });

  window.onpopstate = function() {              // Handle back/forward buttons
    var path = location.pathname;               // Get file path
    loadContent(path);                          // Call function to load page
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Remove current from links
    $('[href="' + page + '"]').addClass('current'); // Update current link
  };
});

// The script is loaded when the DOM is ready
  // The function loadContent is declared and passed url as a parameter
    // The function uses a selector to get the #content element and uses the .load() method to the load the #container module from the corresponding page, hiding it and then fading it in

  // An event listener is then created on the <a> links in the <nav> and fires on a click event, triggering an anonymous function that has been passed the event object
    // The function prevents the page from submitting
    // It then creates a variable called href which is set to this link href that was clicked
    // A jQuery object is then created that stores this link
    // A selector finds all of the <a> elements and removes the class 'current' from them
    // This link then has a class of 'current' added to it
    // loadContent() is called and passed the href variable as a parameter
    // The history objects' pushState() method is used with three parameters
      // The first is the state parameter
        // This is stored information that goes with each item in the history and can be retrieved when going back to the page, this is set to an empty string
      // The second is the title parameter
        // This will change the title of the page, this is set by the $this.text
      // The third is the url
        // This is set by the href variable
      // .pushState() adds pages to the history stacks, and newly used links are placed at the top of the stack (like a reverse array), pressing the back button moves you down the stack and pressing the forward button will move you back up the stack
  // The window.onpopstate event handles the back/forward controls
    // When the event occurs an anoymous function is run
      // A variable called path is created and set to the filepath that the user is navigating to
      // loadContent() is called and passed path as a parameter to be used as the url in the function
      // The last three lines are set to remove and set the class 'current' on the appropriate link
