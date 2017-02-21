// Store the first list item in a variable
var firstItem = document.getElementById('one');

// Get the content of the first list item
var itemContent = firstItem.innerHTML;

// Update the content of the first list item so it is a link
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';

// This exercise demonstrates how to update the inner text and HTML of an element
// This technique can also be used for malicious purposes for users to inject unwanted code into your script, opening up sensitive information to be potentially compromised
