function getTarget(e) {                          // Declare function
  if (!e) {                                      // If there is no event object
    e = window.event;                            // Use old IE event object
  }
  return e.target || e.srcElement;               // Get the target of event
}

function itemDone(e) {                           // Declare function
  // Remove item from the list
  var target, elParent, elGrandparent;           // Declare variables
  target = getTarget(e);                         // Get the item clicked link

  if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
    elListItem = target.parentNode;              // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }
  if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
    elListItem = target.parentNode.parentNode;   // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }

  // Prevent the link from taking you elsewhere
  if (e.preventDefault) {                        // If preventDefault() works
    e.preventDefault();                          // Use preventDefault()
  } else {                                       // Otherwise
    e.returnValue = false;                       // Use old IE version
  }
}

// Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');// Get shopping list
if (el.addEventListener) {                       // If event listeners work
  el.addEventListener('click', function(e) {     // Add listener on click
    itemDone(e);                                 // It calls itemDone()
  }, false);                                     // Use bubbling phase for flow
} else {                                         // Otherwise
  el.attachEvent('onclick', function(e) {        // Use old IE model: onclick
    itemDone(e);                                 // Call itemDone()
  });
}

// This exercise gets the ul element and adds an event listener (and IE fallback to it) which listens for a click event and then calls the itemDone() function
// The itemDone calls the getTarget() function, which gets the target of the click event, which is passed back to the itemDone function
// The itemDone function then uses the target of the click event and gets the parent element (the li) of the click event and stores a reference to it, and then gets the grandparent (the ul) and stores a reference to it
// itemDone then calls the reference to the ul and uses the .removeChild method to remove the clicked upon li
// itemDone also uses preventDefault on the target of the event to prevent the page from being submitted
