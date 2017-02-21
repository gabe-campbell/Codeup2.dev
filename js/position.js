var sx = document.getElementById('sx');   // Element to hold screenX
var sy = document.getElementById('sy');   // Element to hold screenY
var px = document.getElementById('px');   // Element to hold pageX
var py = document.getElementById('py');   // Element to hold pageY
var cx = document.getElementById('cx');   // Element to hold clientX
var cy = document.getElementById('cy');   // Element to hold clientY

function showPosition(event) {    // Declare function, pass in event as parameter
  sx.value = event.screenX; // update element with screenX
  sy.value = event.screenY; // update element with screenY
  px.value = event.pageX; // update element with pageX
  py.value = event.pageY; // update element with pageY
  cx.value = event.clientX; // update element with clientX
  cy.value = event.clientY; // update element with clientY
}

var el = document.getElementById('body');   // Get body element
el.addEventListener('mousemove', showPosition, false);  // Moving the mouse updates position

// This exercise starts by creating variables to store references to different elements on the page
// It then gets the body element and then uses an event listener which fires upon any mouse movement, calling the showPosition() function
// showPosition() then finds the values for the X and Y coordinates for the screen, page, and client, it then updates the value of the corresponding page element to display those values
