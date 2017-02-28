$('.slider').each(function() {              // For every slider
  var $this   = $(this);                    // Current slider
  var $group  = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray  = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  var timeout;                              // Sets gap between auto-sliding

  function move(newIndex) {          // Creates the slide from old to new one
    var animateLeft, slideLeft;      // Declare variables

    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active');        // Add class to new item

    if (newIndex > currentIndex) {   // If new item > current
      slideLeft = '100%';            // Sit the new slide to the right
      animateLeft = '-100%';         // Animate the current group to the left
    } else {                         // Otherwise
      slideLeft = '-100%';           // Sit the new slide to the left
      animateLeft = '100%';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide
      $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
      $group.css( {left: 0} );               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }

  function advance() {                     // Used to set
    clearTimeout(timeout);                 // Clear previous timeout
    timeout = setTimeout(function() {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 4000);                              // Milliseconds timer will wait
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
    $button.on('click', function() { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
  });

  advance();                          // Script is set up, advance() to move it


});

// The script starts by selecting the elements within the element with the .slider class and calling the .each() method on them, calling an anonymous function
  // The function begins be declaring and setting a series of jQuery objects and variables
    // The first is an object called $this, which gets this current slider
    // The next is called $group and uses the .find() method on this to find elements with the .slide-group class
    // The next is called $slides and uses the .find() method again on this to find all elements with the .slide class
    // The next line creates an empty array called buttonArray
    // The next line is a variable called currentIndex, which is set to hold a value of 0
    // The last line in this series declares a variable called timeout

    // A function called move() is declared and passed newIndex as a parameter
      // The function then declares two variable: animateLeft and slideLeft

      // An if statement then uses the .is() method on the $group object to check if it :animated or to see if the currentIndex is equal to the newIndex
        // If either condition is true the statement returns

      // The item in the buttonArray at [currentIndex] has the .removeClass() method called on it to remove the 'active' class
      // The item in the buttonArray at [newIndex] has the .addClass() method called on it to add the 'active' class

      // An if statement then checks to see if the newIndex is greater than the currentIndex
        // If it is, then the new slide is moved to the right and the current group is moved left
        // If it is not, then the new slide is moved to the left and the current group is moved to the right

      // A selector then gets the item in the $slides objects that is equal to the newIndex and uses the .css() method to apply new CSS rules to it

      // The $group object is then selected and animated, then has an anonymous function called on it
        // The function gets the item from the $slides object that is equal to the currentIndex an applies new CSS rules
        // It then gets the item from the $slides object that is equal to the newIndex an applies new CSS rules
        // The $group is then selected and its CSS rules are changed
        // The currentIndex is then set to equal the newIndex

    // A function called advance() is then declared
      // The function calls the clearTimeout() function and passes timeout as a parameter
      // It then sets timeout to equal a setTimeout() function
        // setTimeout() is passed an anonymous function as a parameter
          // The anonymous function checks to see if the currentIndex is less than the number of slides in the $slides object minus 1
            // If it is then the move() function is called and passed the currentIndex + 1 (move to the next slide)
            // If it is not then the move() function is called and passed 0 (move to the first slide)
          // A 4 second delay is then passed to setTimeout()

    // The $.each method is called on the $slides object and is proccessed by an anonymous function that has been passed index
      // The function creates a jQuery object called $button which is set to contain <button> markup
      // An if statement then checks to see if the index is equal to the currentIndex
        // If it is, then the .addClass() method is used on the $button object to add the 'active' class
      // An event listener is then placed ont he $button object that is fired on a click, triggering an anonymous function
        // The function calls the move() function and is passed index
      // the .appendTo() method is chained to the event listener and adds the $button to the .slide-buttons element
      // The .push() array method is called on the buttonArray to add $button to the end of the array

    // The advance() function is called once the script is finished loading
