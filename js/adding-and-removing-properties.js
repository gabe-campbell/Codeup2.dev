// Set up the object
var hotel = {
  name : 'Park',
  rooms: 120,
  booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

//Update the HTML
var elName = document.getElementById('hotelName'); //Get the element
elName.textContent = hotel.name; //Update the HTML with the property of the object

var elPool = document.getElementById('pool'); //Get the element
elPool.className = hotel.pool; //Update the HTML with property of the object

var elGym = document.getElementById('gym'); //Get the element
elGym.className = hotel.gym; //Update the html with property of the object

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
*/
