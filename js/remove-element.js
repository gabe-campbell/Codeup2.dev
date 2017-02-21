// Store the element to be removed in a variable.
var removeEl = document.getElementsByTagName('li')[3];

// Find the element which contains the element to be removed
var containerEl = document.getElementsByTagName('ul')[0];

// Remove the element.
containerEl.removeChild(removeEl);

// This exercise selects an element and stores a reference to it in a variable, it then selects the parent of that element and stores it in a variable as well.
// Finally, its references the parent element with the .removeChild() method and uses the variable of the desired element to remove it from the DOM
