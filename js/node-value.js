var itemTwo = document.getElementById('two'); // Get second list itemTwo

var elText = itemTwo.firstChild.nodeValue; // Get its text content
elText = elText.replace('pine nuts', 'kale');  // Change pine nuts to kale

itemTwo.firstChild.nodeValue = elText; // update the list item

// This exercise uses the DOM to change the text that is in the selected node using the .nodeValue property and the .replace() method
