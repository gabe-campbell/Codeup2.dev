var width = 12;       // Width variable
var height = 'twelve';    // height variable

function calculatArea(width, height) {
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
document.getElementById('area').innerHTML = calculatArea(width, height);
