var sx = document.getElementById('sx');   // Element to hold screenX
var sy = document.getElementById('sy');   // Element to hold screenY
var px = document.getElementById('px');   // Element to hold pageX
var py = document.getElementById('py');   // Element to hold pageY
var cx = document.getElementById('cx');   // Element to hold clientX
var cy = document.getElementById('cy');   // Element to hold clientY

function showPosition(event) {    // Declare function, pass in event as parameter
  sx.value = event.screenX; // update element with screenX
  sy.value = event.screenY; // update element with screenY
  px.value = event.screenX; // update element with pageX
  py.value = event.screenY; // update element with pageY
  cx.value = event.screenX; // update element with clientX
  cy.value = event.screenY; // update element with clientY
}

var el = document.getElementById('body');   // Get body element
el.addEventListener('mousemove', showPosition, false);  // Moving the mouse updates position
