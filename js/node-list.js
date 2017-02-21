var hotItems = document.querySelectorAll('li.hot'); // Store the NodeList in an array
if (hotItems.length > 0) { // If it contains items

  for (var i = 0; i < hotItems.length; i++) { // Loop through each items
    hotItems[i].className = 'cool';  // Change the value of class attribute
  }

}

// This exercise goes further in depth about calling, storing, and accessing nodelists
// After the list is called, there is a check to make sure that there are actually items in the list before executing the code block, preventing unnecessary code from running
