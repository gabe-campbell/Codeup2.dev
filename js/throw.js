var width = 12;       // Width variable
var height = 'twelve';    // height variable

function calculateArea(width, height) {
  try {
    var area = width * height;          // Try to calculate new area
    if (!isNaN(area)) {                 // If area is a number
      return area;                      // Return area
    } else {            // Otherwise throw an error
      throw new Error('calculateArea() received invalid number');
    }
  } catch(e) {          // If there was an error
    console.log(e.name + ' ' + e.message);        // Show error in console
    return 'We were unable to calculate the area.';   // Show users a message
  }
}

// Try to show the area on the PAGE
document.getElementById('area').innerHTML = calculateArea(width, height);

// The script begins by declaring and setting two variables, one of which has been set to a string

// A function is then declared and is passed the two variables as parameters
  // The function uses a try/catch
    // The try statement declares a variable and tries to calculate it
      // It then uses an if statement to test if the result is a number, and then if it is it returns it
      // If it is NaN, then a new Error is created and logged to the console
    // The catch is passed the event object and will log it to the console and then return an error message to the users

// A selector then gets the #area element and sets its HTML to the result of the function call of calculateArea
  // If the area was successfully calculated then it will display the area, if not then it will display the error message to the user
