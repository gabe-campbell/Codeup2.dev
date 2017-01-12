// The script is stored in an iife to protect the scope of the variables
(function() {

  //PART ONE: Create hotel object and write out the offer details

  //Create a hotel object using object literal syntacx
  var hotel = {
    name: 'Park',
    roomRate: 240, //Amount in dollars
    discount: 15, //Percentage in dollars
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

//Write out the hotel name, standard rate, and the special rate
var hotelName, roomRate, specialRate; // Declare Variables
hotelName = document.getElementById('hotelName'); //Get Elements
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name; //Write the hotel name
roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //Write hotel rate
specialRate.textContent = '$' + hotel.offerPrice(); //Write the offer price

//PART TWO: Calculate and write out the expiry details for the offer
var expiryMSG; //Message displayed to user
var today; //Today's date
var elEnds; //The element that shows the message a out the offer ending

function offerExpires(today) {
  //Declare variables within the function for local scope
  var weekFromToday, day, date, month, year, dayNames, monthNames;
  //Add 7 days time (in milliseconds)
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  //Create arrays to hold the names of days/months
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //Collect the parts of the date to show on the Percentage
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();
  //Create the Message
  expiryMSG = 'Offer expires next ';
  expiryMSG += day + ' <br>(' + date + ' ' + month + ' ' + year + ')';
  return expiryMSG;
}

today = new Date(); //Put today's date in a variable
elEnds = document.getElementById('offerEnds'); //Get the offerEnds element
elEnds.innerHTML = offerExpires(today); //Add the expiry message

//Finish the iife
}());
