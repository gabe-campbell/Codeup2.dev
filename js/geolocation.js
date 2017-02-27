// Note that this example might not work locally in Chrome (it works on a web server).
// In other browsers, you may get a prompt that allows you to share location data.
// It may take the browser a while to determine your location (his demonstrates why you should not depend on this information before loading the entire page).

var elMap = document.getElementById('loc');       // HTML element
var msg = 'Sorry, we were unable to get your location.';      // No location message

if (Modernizr.geolocation) {        // If geo is supported
  navigator.geolocation.getCurrentPosition(success, fail);      // Ask for location
  elMap.textContent = 'Checking location...';       // Say checking
} else {        // Not supported
  elMap.textContent = msg;        // Add manual entry
}

function success(position) {        // Got location
  msg = '<h3>Longitude:<br>';      // Create message
  msg += position.coords.longitude + '</h3>';       // Add longitude
  msg += '<h3>Latitude:<br>';       // Create message
  msg += position.coords.latitude + '</h3>';        // Add latitude
  elMap.innerHTML = msg;            // Show location
}

function fail(msg) {              // Not got location
  elMap.textContent = msg;        // Show error message
  console.log(msg.code);          // Log the error
}

// The script starts by creating a variable and setting it to reference the element with the #loc id
// It then creates another variable that is set to hold an error message for the user

// An if statement uses Modernizr to check if geolocation is supported
  // If it is, then the .getCurrentPosition() method is used, prompting the user to choose if they'd like to share their location and the #loc element is set to tell the user that the page is "Checking location..."
    // If the user chooses to share their location then the sucess() function will be called
    // If the user chooses not to share their location then the fail() function will be called
  // If it is not, then the #loc element is set to display the error message

// A function called success is declared and passed a position as a parameter
  // position is the data received by the user when they choose to share their location
  // The function then starts building the msg that will be displayed to the user
  // It gets the longitudinal coordinates from the position data and adds it to the msg
  // It continues by adding the heading for Latitude
  // It gets the latitudinal coordinates from the position data and adds it to the msg

// A function called fail is declared an passed msg as a parameter
  // The function sets the #loc element to display the error msg
  // The script then logs the error msg and the error code to the console 
