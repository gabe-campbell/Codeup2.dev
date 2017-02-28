var modal = (function() {                         // Declare modal object

  var $window = $(window);                        // Store the window
  var $modal = $('<div class="modal"/>');         // Create markup for modal
  var $content = $('<div class="modal-content"/>');
  var $close = $('<button role="button" class="modal-close">close</button>');

  $modal.append($content, $close);                // Add close button to modal

  $close.on('click', function(e){                 // If user clicks on close
    e.preventDefault();                           // Prevent link behavior
    modal.close();                                // Close the modal window
  });

  return {                                        // Add code to modal
    center: function() {                          // Define center() method
      // Calculate distance from top and left of window to center the modal
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({                                // Set CSS for the modal
        top:top + $window.scrollTop(),            // Center vertically
        left:left + $window.scrollLeft()          // Center horizontally
      });
    },
    open: function(settings) {                     // Define open() method
      $content.empty().append(settings.content);   // Set new content of modal

      $modal.css({                                 // Set modal dimensions
        width: settings.width || 'auto',           // Set width
        height: settings.height || 'auto'          // Set height
      }).appendTo('body');                         // Add it to the page

      modal.center();                              // Call center() method
      $(window).on('resize', modal.center);        // Call it if window resized
    },
    close: function() {                            // Define close() method
      $content.empty();                            // Remove content from modal
      $modal.detach();                             // Remove modal from page
      $(window).off('resize', modal.center);       // Remove event handler
    }
  };
}());

// The script begins by declaring an object called modal
  // The object is set to contain a function, which controls the settings of the modal
    // The function begins by declaring four jQuery objects
      // The first is called $window and is set to cache the window object
      // The second is called $modal and is set to create the markup for the modal
      // The third is called $content and is set to hold the content markup for the modal
      // The fourth is called $close and is set to hold the markup for the close button
    // The .append() method is the used on the $modal object and is passed $content and $close
    // An event listener is the created on the $close object to fire on a click, triggering an anoymous function which has been passed the event object
      // The function prevents the link from submitting
      // It the uses the .close() method on the modal object to close the modal when the user clicks on it
    // The return keyword is used to add the functionality of the .close(), .open(), and .center() methods
      // center is set to an anoymous function, which calculates the position for the modal on the page and changes the CSS to center the modal in the window
        // Two variables are created to calculate the top and left distances using the height/outerHeight and width/outerWidth properties
        // The .css() method is used on the $modal object along with the values that were just calculated and the .scrollTop() and .scrollLeft() methods
      // open is set to an anonymous function that has been passed 'settings' as a parameter
        // The next line chains the .empty() and .append() methods to clear the $content object of all text and child elements and then to set them to the content of the $content object (which is a reference to the #share-options element) plus the settings for the modal window
        // The .css() method is used on the $modal object to set the height and width to the values that are specified in the modal.open() event listener, or if no values were included it sets them to 'auto'
        // The .appendTo() method is then chained to add the modal and its content to the body element
        // Our .center() method is then used on the modal
        // An event listener is then placed on the window object and is fired by a resizing of the window, triggering the modal.center method to recenter the page if the user changes the window size
      // close is set to an anonymous function
        // It first calls the .empty() method on the $content object
        // It then calls the .detach() method on the $modal object
        // It then uses the .off() method on the window to remove the event handler that was listening for a resize on the window object

// The two scripts work like this:
  // 1) The page is loaded and the IIFE in the modal-init.js script is called
      // - This causes the #share-options element to be cached and then removed from the page
      // - It also intoduces an event listener to control the function of the #share button to open the modal
  // 2) The modal-window.js script is loaded and the modal object is created along with its markup and the methods we will use to control it
  // 3) When the user clicks on the #share button it calls the .open() method within the modal-window.js script and brings up the modal
  // 4) If the user resizes the page, an event handler automatically readjusts the modal to the center of the window
  // 5) If the user then clicks on the close button, the .close() method is called and and the modal has its content removed and is removed from the page
