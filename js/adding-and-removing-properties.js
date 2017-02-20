// Set up the object
var hotel = {
  name : 'Park',
  rooms: 120,
  booked : 77
};

// Use dot notation to update the object with new key value pairs
hotel.gym = true;
hotel.pool = false;

// Use the delete keyword and dot notation to select the key value pair to be removed from the object
delete hotel.booked;

// Update the HTML
var elName = document.getElementById('hotelName'); // Get the element
elName.textContent = hotel.name; // Update the HTML with the property of the object

var elPool = document.getElementById('pool'); //Get the element
elPool.className = hotel.pool; //Update the HTML with property of the object

var elGym = document.getElementById('gym'); //Get the element
elGym.className = hotel.gym; //Update the html with property of the object

// This exercise demonstrates how to add and remove properties from an object using dot notation and the delete keyword
