var firstItem = document.getElementById('one'); // Get the first item
if (firstItem.hasAttribute('class')) {  // If it has a clasas attribute
  firstItem.removeAttribute('class');  // Remove its class attribute
}

// This exercise gets an element using its id and checks if it has a class attribute using .hasAttribute(), if it does then it removes it using .removeAttribute() 
