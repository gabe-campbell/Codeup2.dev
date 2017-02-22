// NOTE: This example will not work locally in all browsers.
// Please try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

$(function() {                                    // When the DOM is ready

  var times;                                      // Declare global variable
  $.ajax({
    beforeSend: function(xhr) {                   // Before requesting data
      if (xhr.overrideMimeType) {                 // If supported
        xhr.overrideMimeType("application/json"); // set MIME to prevent errors
      }
    }
  });

  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable() {                    // Declare function
    $.getJSON('data/example.json')              // Try to collect JSON data
    .done( function(data){                      // If successful
      times = data;                             // Store it in a variable
    }).fail( function() {                       // If a problem: show message
      $('#event').html('Sorry! We could not load the timetable at the moment');
    });
  }

  loadTimetable();                              // Call the function


  // CLICK ON THE EVENT TO LOAD A TIMETABLE
  $('#content').on('click', '#event a', function(e) {  // User clicks on event

    e.preventDefault();                                // Prevent loading page
    var loc = this.id.toUpperCase();                   // Get value of id attr

    var newContent = '';                               // Build up timetable by
    for (var i = 0; i < times[loc].length; i++) {      // looping through events
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>'); // Display times on page

    $('#event a.current').removeClass('current');       // Update selected item
    $(this).addClass('current');

    $('#details').text('');                             // Clear third column
  });

  // CLICK ON A SESSION TO LOAD THE DESCRIPTION
  $('#content').on('click', '#sessions li a', function(e) { // Click on session
    e.preventDefault();                                     // Prevent loading
    var fragment = this.href;                               // Title is in href

    fragment = fragment.replace('#', ' #');                 // Add space after#
    $('#details').load(fragment);                           // To load info

    $('#sessions a.current').removeClass('current');        // Update selected
    $(this).addClass('current');
  });


  // CLICK ON PRIMARY NAVIGATION
  $('nav a').on('click', function(e) {                       // Click on nav
    e.preventDefault();                                      // Prevent loading
    var url = this.href;                                     // Get URL to load

    $('nav a.current').removeClass('current');               // Update nav
    $(this).addClass('current');

    $('#container').remove();                                // Remove old part
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
  });

});

// Once the DOM is ready, the script itself is broken into five parts
  // A global variable called times is declared
  // PART ONE:
    // A $.ajax() request is created
      // Its beforeSend property is set to an anonymous function that is passed xhr as a parameter
        // The function uses an if statement to check if the .overrideMimeType() method is supported, and if it is it is used and set to 'application/json'
        // This method tells the script that the response from the server should be treated as JSON data, this ensures that the data that is received is of the type that the script requires
  // PART TWO:
    // A function called loadTimetable() is declared
      // The function first uses the $.getJSON() method to get the data from the JSON FILE
        // If it is successful, an anonymous function that is passed data as a parameter is called
          // The function then stores the data in the time global variable
        // If it fails, an anonymous function selects the #events element and sets its HTML to an error message saying that the information could not be loaded
    // The loadTimetable() function is called
  // PART THREE:
    // An event listener is placed on the #content elements that is fired by a click on the #event links, triggering an anonymous function that has been passed the event object
      // The function prevents the page form submitting
      // It then creates a variable called loc that takes and stores the id attribute from the link that was clicked and makes it uppercase
      // It then creates and sets a variable called newContent to an empty string that will be ued to build up the message that will be displayed to the User
      // A for loop goes through the JSON file for all of the events attributed to that location
        // The first step in the loop adds an <li> containing an opening and closing <span> tag
          // Within the <span> tags, a selecter uses dot notation to get the first time
            // It does this by directing the script to the data file, which is held in the times variable,
            // Then it uses the id attribute that was taken from the location that was clicked and stored in the loc variable
            // It then uses the index - i - to find the time for that iteration
            // So if the California link was clicked, on the first iteration it will look like this:
              // times[CA][0].time = '9:00'
              // This will then be placed in the span that was created
        // The second step in the loop creates an opening <a> tag and starts building the href attribute
          // The href points to the descriptions.html file with a '#' symbol to direct the script to the correct part of the page
        // The third step in the loop continues bulding the href attribute
          // Because the titles in the JSON file use spaces, the script has to convert them to a usable form before they can be used
          // It does this by taking the title and using the .replace() method to take the spaces and convert them to dashes that will be used for the div id values on the descriptions.html page
            // For example: times[loc][i].title.replace(/ /g, '-') on the first iteration would convert this to a usable form
              // times[CA][0].title = 'Intro to 3D Modeling' -> times[CA][0].title.replace(/ /g, '-') = 'Intro-to-3D-Modeling' which is then added to the href to look like this:
                // <a href="descriptions.html#Intro-to-3D-Modeling">
        // The last step in the loop is similar to the previous step, except it doesn't need to use the .replace() method because the title will be displayed with spaces as is to the user, it the closes the <a> and <li> tags
    // The for loop repeats this process for each event that is included in the location that was selected
    // The next step selects the #sessions element and sets its html to an opening and closing <ul> tag containing the newContent variable
    // A selector then finds the <a> element contained within the #event element that has a class of 'current' and removes that class from it
    // This is then selected and has the 'current' class added to it
    // The #details element is then selected and the .text() method is used with an empty string to clear its content
  // PART FOUR:
    // An event listener is placed on the #content element that is fired by a click on any <a> tags within <li> tags within the #sessions element, triggering an anonymous function that has been passed the event object
      // The function then prevents the page from submitting
      // A variable called fragment is created and set to this href that was clicked
        // fragment = 'descriptions.html#Intro-to-3D-Modeling'
      // The fragment is then set to equal fragment.replace('#', ' #')
        // fragment = 'descriptions.html #Intro-to-3D-Modeling'
      // A selector finds the #details element and uses the .load() method to load the html contained within the <div> with the corresponding id
        // $('#details').load(fragment); will give:
        /*
            <h3>Intro to 3D Modeling</h3>
            <p>Come learn how to create 3D models of parts you can then make on our bus! You'll get to know the same 3D modeling software that is used worldwide in professional settings like engineering, product design, and more. Develop and test ideas in a fun and informative session hosted by Bella Stone, professional roboticist.</p>
        */
  // PART FIVE:
    // An event listener is created on the <a> tags within the <nav> that is fired on a click event, triggering an anonymous function that has been passed the event function
      // The function prevents the page from submitting
      // It then creates and sets a variable called url to this href attribute
      // The <a> tag that has a class of 'current' within the <nav> is selected and the 'current' class is removed from it
      // This link that was clicked has a class of 'current' added to it
      // A selector gets the #container element and removes it from the DOM
      // A selector finds the element with an id of 'content' and uses the .load()
        // The .load() method uses the url variable (which contains the this href) and concatenates it to load the #container from the corresponding page into the #content element
        // The #container is immediately hidden and then faded in
