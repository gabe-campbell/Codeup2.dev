function showEvents(data) {               // Callback when JSON loads
  var newContent = '';                    // Variable to hold HTML

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    for (var i = 0; i < data.events.length; i++) {      // Loop throught object
      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />'>;
      newContent += '<p><b>' + data.events[i].location + '</b></br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}

// The script starts by declaring a function called showEvents() which is passed a parameter of data
  // // A for loop goes through the items in the events object
    // The first step creates an opening <div> with the class 'event' and adds it to the empty string
    // The second step creates an opening <img tag and uses dot notation to get the appropriate img src from the JSON object and adds it to the string
    // The third step does the same for the alt text for the image, and then closes the img tag and adds it to the string
    // The fourth step creates a new opening <p> and <b> tag and reuses the location tags value and then closes the <p> and <b> tags
    // The fifth step adds the date from the JSON object and closes the <p> tag
    // The last step closes the <div> tag
  // The element with the id of 'content' is selected and its HTML is set to the content prepared by the for loop
// In order to work the .html file for this exercise also includes a script tag which holds serves as a server other than our own and does a callback for the showEvents() function
// The information does not need to be parsed through using this method, and only needs to be referred to as 'data' and then the information can be accessed using normal dot notation


/* The flow of events works like this:

    1) The .html page hits the first script tag, which contains the data-jsonp.js file (this file)
    2) The data-jsonp.js file contains a function which is passed a parameter of data and then the steps that the function is to execute
    3) The data-jsonp.js file has no call within itself to the showEvents() function so there is nothing more that the .html file can do
    4) It moves on to the next script, which is a link to a file on another server with a callback to the showEvents() function in the url
    5) The url directs us to the jsonp.js file which has a call to the showEvents() function with data in JSON form
    6) The function then passes this JSON back to the showEvents() declaration on data-jsonp.js where it is processed as the argument (the data parameter) and can be used as a regular Javascript object
    7) The data is processed and added to the page as text and HTML 
*/
