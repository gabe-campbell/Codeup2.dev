// Set up the object
// Objects hold items in comma seperated, key-value pairs
// Calls an anonymous function to calculate the number of available rooms
// Uses the "this" keyword to refer to the object that is holding the function
var hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};

// Update the HTML
// Uses object dot notation to access the value that is attibuted to the specified object key
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
// The dot notation can calculate the available rooms with a function as well
elRooms.textContent = hotel.checkAvailability();   // Update HTML with property of the object

// This exercise demonstrates the versatility of objects and the data that they can contain, including the uses of functions to calculate data
