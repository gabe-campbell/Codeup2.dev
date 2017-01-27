function getTarget(e) { // Declare function
  if (!e) {     // If there is no event object
    e = window.event;   // USe old IE event object
  }
  return e.target || e.srcElement;    // Get the target of event
}

function itemDone(e) {    // Declare function
  // Remove item from the list
  var target, elParent, elGrandparent;    // Declare variables
  target = getTarget(e);    // get the item clicked link

  if ( target.nodeName.toLowerCase() == "a") {  // If user clicked on an a element
    elListItem = target.parentNode;     // Get its li element
    elList = elListItem.parentNode;   // Get the ul element
    elList.removeChild(elListItem);   // Remove list item from list
  }
  if ( target.nodeName.toLowerCase() == "em" ) {  // If the user clicked on and em element
    elListItem = target.parentNode.parentNode;  // Get its li element
    elList = elListItem.parentNode;   // get its ul element
    elList.removeChild(elListItem);   //Remove list item from the list
  }

  // Prevent the link from taking you elsewhere
  if (e.preventDefault) {   // If preventDefault works
      e.preventDefault();   // Use preventDefault()
  } else {    // Otherwise
    e.returnValue = false;    // Use IE fallback
  }
}

// Set up event listenersto call itemDone on clicked
var el = document.getElementById('shoppingList'); // Get shipping list
if (el.addEventListener) {    // If event listeners work
  el.addEventListener('click', function(e) {    // Add event listener on click
    itemDone(e);    // it calls itemDone()
  }, false);    // Use bubbling phase for flow
} else {   // Otherwise
  el.attachEvent('onlick', function(e) {  // Use IE fallback
    itemDone(e);    // Call itemDone()
  });
}
