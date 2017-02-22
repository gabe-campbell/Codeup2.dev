var xhr = new XMLHttpRequest();             // Create new XMLHttpRequest object

xhr.onload = function () {                  // When readystate changes
  responseObject = JSON.parse(xhr.responseText);


  // BUILD UP STRING WITH NEW CONTENT ( could also use DOM manipulation)
  var newContent = '';
  for (var i = 0; i < responseObject.events.length; i++) {
    // Loop thorugh object
    newContent += '<div class="event">';
    newContent += '<img src="' + responseObject.events[i].map + '" ';
    newContent += 'alt="' + responseObject.events[i].location + '" />';
    newContent += '<p><b>' +
    responseObject.events[i].location + '</b><br>';
    newContent += responseObject.events[i].date + '</p>';
    newContent += '</div>';
  }

  // Update the page with new content
  document.getElementById('content').innerHTML = newContent;
};

xhr.open('GET', 'data/data.json', true);      // Prepare the request
xhr.send(null);                               // Send the request

// The script starts by creating a new XMLHttpRequest() object using the constructor

// Once the response is loaded an anonymous function is called
  // The JSON data is stored in a variable called responseObject and set using the JSON objects .parse() method, which goes through the data string from the JSON file and converts it into a Javascript object

  // An variable is declared and set to an empty STRING

  // A for loop goes through the items in the events object
    // The first step creates an opening <div> with the class 'event' and adds it to the empty string
    // The second step creates an opening <img tag and uses dot notation to get the appropriate img src from the JSON object and adds it to the string
    // The third step does the same for the alt text for the image, and then closes the img tag and adds it to the string
    // The fourth step creates a new opening <p> and <b> tag and reuses the location tags value and then closes the <p> and <b> tags
    // The fifth step adds the date from the JSON object and closes the <p> tag
    // The last step closes the <div> tag
  // The element with the id of 'content' is selected and its HTML is set to the content prepared by the for loop
// The .open() method is then used and finally the .send() as well
