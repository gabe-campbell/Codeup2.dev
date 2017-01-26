// Adding items to the start and end of the list
var list = document.getElementsByTagName('ul')[0];
// Get the <ul> element

// Add new item to the end of the list
var newItemLast = document.createElement('li'); // Create element
var newTextLast = document.createTextNode('cream');  // Create text node
newItemLast.appendChild(newTextLast);  // add text node to the element
list.appendChild(newItemLast);  // Add element to the end of the list

// Add new item to the start of the list
var newItemFirst = document.createElement('li');  // Creat element
var newTextFirst = document.createTextNode('kale');  // Create text node
newItemFirst.appendChild(newTextFirst);  // Add text node to the element
list.insertBefore(newItemFirst, list.firstChild);  // Add element tot he start of the list

var newItemMiddle = document.createElement('li'); // Create element
var newTextMiddle = document.createTextNode('cereal'); // Create text node
newItemMiddle.appendChild(newTextMiddle); // Add the text node to the element
list.insertBefore(newItemMiddle, list.lastChild); // Add the element to the node before the last child node

var listItems = document.querySelectorAll('li'); // Create a list with all <li> elements

// Add a class of cool to all list ITEMS
var i; // Counter variable

for (i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool'; // Change class to cool
}

// Add number of items in the list to the heading
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length;  // Number of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;  // Update h2 using innerHTML (not textContent) because it contains markup
