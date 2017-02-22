// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When response has loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // If server status was ok
    document.getElementById('content').innerHTML = xhr.responseText; // Update
  }
};

xhr.open('GET', 'data/data.html', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// This script creates a new XMLHttpRequest() using the object constructor
// When the response has loaded on the page the element with the id of 'content' is selected and its innerHTML is given the value of the xhr's responseText

// At the bottom of the page the xhr object has the .open() method applied to it, which has three parameters - the HTTP method that is being used, the url of the page that will handle the request, and a boolean that tells the request if it should be asynchronous or not
// the .send() method prepares handles any extra information that will be sent to the server, if there is no data to be sent then the keyword 'null' should be used in its place
