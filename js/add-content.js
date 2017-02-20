// This exercise begins by creating a new Date object held in the variable today
// It then calls this date object and gets the current amount time and stores this in the variable hourNow
// It then creates a variable called greeting to be used later in the script


var today = new Date();
var hourNow = today.getHours();
var greeting;

// The code then sets a conditional statement that checks what time it is and sets a different line of text based on that time and assigns it to greeting
// If the time cannot be found, it will always display the default


if(hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}

// The script finally calls on the document object to create HTML to display a header tag with the appropriate greeting

document.write('<h3>' + greeting + '<h3>');

// This exercise demonstrates the use of Javascript methods to dynamically update the page
