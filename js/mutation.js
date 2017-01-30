var elList, addLink, newEl, newText, counter, listItems;    // Declare variables

elList = document.getElementById('list');   // Get list
addLink = document.querySelector('a');   // Get add item button
counter = document.getElementById('counter'); // Get item counter

function addItem(e) {   // Declare function
  e.preventDefault();   // Prevent link action
  newEl = document.createElement('li');   // New <li> element
  newText = document.createTextNode(prompt('What item do you want to add to your list?')); // New text node
}

function updateCount() {    // Declare function
  listItems = elList.getElementsByTagName('li').length; // Get total of <li>s
  counter.innerHTML = listItems;    // Update counter
}

addLink.addEventListener('click', addItem, false);    // Add item
elList.addEventListener('DOMNodeInserted', updateCount, false);   // DOM updated
