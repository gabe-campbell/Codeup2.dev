// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        // Create XMLHttpRequest object

xhr.onload = function() {              // When response has loaded
 // The following conditional check will not work locally - only on a server
 // if (xhr.status === 200) {             // If server status was ok

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      // Get XML from the server
  var events = response.getElementsByTagName('event'); // Find <event> elements

  for (var i = 0; i < events.length; i++) {            // Loop through them
    var container, image, location, city, newline;      // Declare variables
    container = document.createElement('div');          // Create <div> container
    container.className = 'event';                      // Add class attribute

    image = document.createElement('img');              // Add map image
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');             // Add location data
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }

  function getNodeValue(obj, tag) {                   // Gets content from XML
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'data/data.xml', true);             // Prepare the request
xhr.send(null);                                     // Send the request


// The script creates a new XMLHttpRequest() object using the constructor
// Once the XML response has loaded an anonymous function is run
  // It then creates a variable to hold the XML response from the server
  // A variable is then created that gets a list of the event tag elements from the XML response
  // The events list is then looped through

    // Variables are then declared
    // The container variable is given a reference to a new div elements
    // The container is given the class attribute of 'event'

    // The image variable is given a reference to a new img elements
    // The .setAttribute() method is then used to give the image its src using the corresponding event index and XML map tag value
    // The same process is done to give the image its alt text using the XML location tag value
    // The image is then appended to its container

    // The location, city, and newline variables are given references to their corresponding new elements
    // A new text node is appended to the city variable using the event index and XML location tag value
    // The newline (<br>) element is appended to the location node
    // The city variable is then inserted before the newline node
    // A new text node is appended to the location variable using the event index and XML date tag value
    // The location node is then appended to the container

    // The container is then appended to the element with an id of 'content'

  // A function called getNodeValue() is declared, it takes two parameters - obj and tag
  // This function is called in the loop to get data from the XML file - it uses the obj (events[i]) to find the event it needs in the looped
  // Once it finds the object, it uses the DOM getElementsByTagName() method with the tag that was included as the second parameter in the function call  - 'location' or 'date' in this className
  // It then uses the array index notation ([0]) to select the first matching element along with the .firstChild method and gets the value using the .nodeValue method
  /* For example, when the function is called on line 28 it is really like saying -
      return events[0].getElementsByTagName('location')[0].firstChild.nodeValue;
    Which will direct the page to go to the first event and grab the data that is contained in the location tags which would give - San Francisco, CA
  */

// The .open() method is then created to prepare the XML request
// the .send() method is then created to send any additional data
