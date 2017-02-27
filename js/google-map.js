function init() {
  var mapOptions = {                                 // Set up the map options
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 12
  };
  var venueMap;                                      // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Add element to page
}

window.onload = loadScript;                          // on load call loadScript()

// The script includes two function and a .onload method on the window object that calls the loadScript function once the page finished loading
  // loadScript() creates a script element within the HTML, it then sets its src attribute to the google maps API page with a callback to the init function, it then appends the script to the end of the body
  // init is called by the callback from the loadScript() function and creates two variables, the first of which is the mapOptions variable
    // center tells the API what what latitude and longitude to set the map to initialize to
    // mapTypeId tells the API what map style to use
    // zoom tells the API what level the map should be zoomed to initially
  // the next variable is created and set to create a new map within the #map element and passes it the mapOptions variable to control its initial properties
