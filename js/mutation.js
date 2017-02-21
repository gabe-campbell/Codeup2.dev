var elList, addLink, newEl, newText, counter, listItems; // Declare variables

elList  = document.getElementById('list');               // Get list
addLink = document.querySelector('a');                   // Get add item button
counter = document.getElementById('counter');            // Get item counter

function addItem(e) {                                    // Declare function
  e.preventDefault();                                    // Prevent link action
  newEl = document.createElement('li');                  // New <li> element
  newText = document.createTextNode('New list item');    // New text node
  newEl.appendChild(newText);                            // Add text to <li>
  elList.appendChild(newEl);                             // Add <li> to list
}

function updateCount() {                                 // Declare function
  listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
  counter.innerHTML = listItems;                         // Update counter
}

addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated

// This exercise declares a series of variables and sets it to reference their corresponding elements
// It then adds two event listeners to different elements of the page

// The first event listener is on the add item button and fires upon a click, calling the addItem() function
// addItem() prevents the link from being submitted and creates a new li element and text node, prompting the user for the text input, it then appends these elements together and then to the ul

// The second event listener is on the ul element and fires upon the insertion of a new node to the DOM, calling updateCount()
// updateCount() gets a list of all li elements in the ul and finds the total amount and then updates the counter
