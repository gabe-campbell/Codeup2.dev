var hotItems = document.querySelectorAll('li.hot'); //Store the NodeList in an array
if (hotItems.length > 0) { // If it contains items

  for (var i = 0; i < hotItems.length; i++) { // Loop through each items
    hotItems[i].className = 'cool';  // Change the value of class attribute
  }
  
}
