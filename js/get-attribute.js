var firstItem = document.getElementById('one'); // Get first list item
if (firstItem.hasAttribute('class')) { // If it has a class attribute
  var attr = firstItem.getAttribute('class');  // Get the attribute

  // Add the value of the attribute after the list
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';

}

// This exercise selects an element, and checks if it contains a class attribute, if it does then it takes the value of that attribute and displays it at the bottom of the page
