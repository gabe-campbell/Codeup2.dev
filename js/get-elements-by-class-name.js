var elements = document.getElementsByClassName('hot'); // Find hot elements

if (elements.length > 2) { // If 3 or more are found
  var el = elements[2]; // Select the third item form the NodeList
  el.className = 'cool'; // Change the class to cool
}

// This exercise finds all elements with the specified class name and creates a node list, which is then used in a conditional to change the class name of the specified element from the list
