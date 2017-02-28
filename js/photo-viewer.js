var request;                         // Latest image to be requested
var $current;                        // Image currently being shown
var cache = {};                      // Cache object
var $frame = $('#photo-viewer');     // Container for image
var $thumbs = $('.thumb');           // Thumbnails

function crossfade($img) {           // Function to fade between images
                                     // Pass in new image as parameter
  if ($current) {                    // If there is currently an image showing
    $current.stop().fadeOut('slow'); // Stop any animation & fade it out
  }

  $img.css({                         // Set the CSS margins for the image
    marginLeft: -$img.width() / 2,   // Negative margin of half image's width
    marginTop: -$img.height() / 2    // Negative margin of half image's height
  });

  $img.stop().fadeTo('slow', 1);     // Stop animation on new image & fade in

  $current = $img;                   // New image becomes current image

}

$(document).on('click', '.thumb', function(e){ // When a thumb is clicked on
  var $img,                               // Create local variable called $img
      src = this.href;                    // Store path to image
      request = src;                      // Store latest image request

  e.preventDefault();                     // Stop default link behavior

  $thumbs.removeClass('active');          // Remove active from all thumbs
  $(this).addClass('active');             // Add active to clicked thumb

  if (cache.hasOwnProperty(src)) {        // If cache contains this image
    if (cache[src].isLoading === false) { // And if isLoading is false
      crossfade(cache[src].$img);         // Call crossfade() function
    }
  } else {                                // Otherwise it is not in cache
    $img = $('<img/>');                   // Store empty <img/> element in $img
    cache[src] = {                        // Store this image in cache
      $img: $img,                         // Add the path to the image
      isLoading: true                     // Set isLoading property to true
    };

    // Next few lines will run when image has loaded but are prepared first
    $img.on('load', function(){           // When image has loaded
      $img.hide();                        // Hide it
      // Remove is-loading class from frame & append new image to it
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;       // Update isLoading in cache
      // If still most recently requested image then
      if (request === src) {
        crossfade($img);                  // Call crossfade() function
      }                                   // Solves asynchronous loading issue
    });

    $frame.addClass('is-loading');        // Add is-loading class to frame

    $img.attr({                           // Set attributes on <img> element
      'src': src,                         // Add src attribute to load image
      'alt': this.title || ''             // Add title if one was given in link
    });

  }

});

// Final line runs once when rest of script has loaded to show the first image
$('.thumb').eq(0).click();                // Simulate click on first thumb

// The script starts by declaring a series of variables and jQuery objects
  // The first is a variable called request which will hold the image that is being requested
  // The second is an object called $current, which will reference the current image
  // The third is an object called cache that is empty
  // The fourth is an object called $frame that references the #photo-viewer element
  // The fifth is an object called $thumbs that reference the .thumb element

// A function called crossfade is then called and passed $img as a parameter
  // The function first creates an if statement that tests to see if the $current object has a value, if it does then the .stop() and .fadeOut() methods are called
    // This is meant to check if there is an image currently being shown and if there is to stop the animation and fade it out from the page
  // the .css() method is then called on the $img object to set its margins
  // The .stop() and .fadeTo() methods are called on the $img object
    // .fadeTo() takes two parameters, one controls the speed of the animation and the
    // This stops the animation on the current image and fades it in
  // The $current object is the set to the $img object

// An event listener is then placed on the window object on the .thumb elements to fire on a click, triggering an anonymous function that has been passed the event object
  // The function declares the $img object and the src variable
  // The src variable is then set to this href
  // The request variable is then set to the src variable, getting this href

  // The link is then prevented from submitting

  // The $thumbs object is selected and then the 'active' class is removed from its elements
  // This thumbnail that was clicked on has the 'active' class added to it

  // An if statement then uses the .hasOwnProperty() method to see if the cache object has the src variable
    // If it does, an additional if statement uses the .isLoading method on the cache[src] to see if the the image is not loading
      // If the image is not loading, then the crossfade() function is called and is passed cache[src].$img
    // If it does not,
      // the $img object is set to reference the <img> elements
      // the cache[src] object is then set so the $img key is set to the $img object and the isLoading property is set to true

      // An event listener is then placed on the $img object and fires on a load event, triggering an anonymous function
        // The .hide() method is then called on the $img object
        // The .removeClass() method is called on the $frame object to remove the 'is-loading' class and the .append() method is chained to add the $img object
        // The .isLoading property in the cache[src] object is then updated to false
        // An if statement then checks to see if the request variable is the same as the src variable
          // If it is, then the crossfade() function is called with the $img object passed to it

      // The .addClass() method is called on the $frame object to add the 'is-loading' class

      // The .attr() method is called on the $img object to set the 'src' key to the src variable, then the 'alt' key is set to this title or to an empty string

// The last line is set to simulate a click event on the first image in the .thumb nodelist
