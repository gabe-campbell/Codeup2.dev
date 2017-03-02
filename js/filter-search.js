(function() {                             // Lives in an IIFE
  var $imgs = $('#gallery img');          // Get the images
  var $search = $('#filter-search');      // Get the input element
  var cache = [];                         // Create an array called cache

  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function(img) {         // For each entry in cache pass image
      var index = 0;                      // Set index to 0

      if (query) {                        // If there is some query text
        index = img.text.indexOf(query);  // Find if query text is in there
      }

      img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
    });
  }

  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }

}());

// The script is contained within an IIFE
  // It begins by creating two jQuery objects to cache doccument elements
  // An empty array called cache is also created

  // The .each() method is called on the $imgs object to call an anonymous function
    // The function uses the .push() method on the cache array to add this element and this alt text, which has had the .trim() and .toLowerCase() methods used to alter the text into a usuable form

  // The filter() function is then declared
    // The function creates a variable called query that gets this value and treats it with the .trim() and .toLowerCase() methods
    // The .forEach() method is then called on the cahche array to call an anonymous function that has been passed img as an argument
      // The function creates a variable called index and sets it to 0
      // It then uses an if statement to check if query has a value
        // If it does the it sets index to see if the user query is located in the images alt text
      // A ternary operator is used to see if the query was not found in the images, if it is not found (if the index === -1) then the style of the element is set to none, if it is then it is shown

  // An if statement tests to see if the browser supports the 'oninput' event
    // If it does then it uses an event listener with the 'input' event to call the filter() funtion on an input event on the $search object
    // If it does not then it uses an event listener with the 'keyup' event to call the filter() function on a keyup event on the $search object
