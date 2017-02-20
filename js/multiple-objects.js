// Create the template for objects that are hotels
// Uses a function to create an object template named hotels
// The parameters will be the keys that will be used in the object, uses the "this" keyword
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms- this.booked;
  };
}


// Create two hotel objects
// Creates a new object using the object template created above, the parameters are the value part of the key value pairs for the object
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);


// Update the HTML for the page
// Creates a variable using concatenation to combine to the values with text to create the desired message
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

// This exercise shows how to create an object template to create quickly create new objects without full object declaration
