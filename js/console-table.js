var contacts = {                 // Store contact info in an object literal
  "London": {
    "Tel": "+44 (0)207 946 0128",
    "Country": "UK"
  },
  "Sydney": {
    "Tel": "+61 (0)2 7010 1212",
    "Country": "Australia"
  },
  "New York": {
    "Tel": "+1 (0)1 555 2104",
    "Country": "USA"
  }
};

console.table(contacts);                   // Write data content to console

var city, contactDetails;                  // Declare variables
contactDetails = '';                       // Will hold details written to page

$.each(contacts, function(city, contacts) {
  contactDetails += city + ': ' + contacts.Tel + '<br />';
});
$('h2').after('<p>' + contactDetails + '</p>');

// An object literal is declared called contacts with a series of objects containing key-value pairs

// A console.table() is declared and passed the contacts object

// Two variables are declared, the second of which is set to an empty string
// The $.each() method is then used is passed contacts and an anonymous function, which is passed city and the contacts data
  // The function updates the contactDetails string with the city and the phone number, this is continued until all the data has been entered into the table
// A set of <p> tags is then added after the header containing the contactDetails string that was created
