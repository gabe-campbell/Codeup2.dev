var firstItem = document.getElementById('one'); // Find first list item
var showTextContent = firstItem.textContent; // Get value of textContent
var showInnerText = firstItem.innerText; // Get value of innerText

// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread'; // Update the first list item

// This exercise demonstrates that the value of textContent will include all text and additional elements within the selected element, including markup
// innerText will contain ONLY the text of the selected element, not tags within em or span tags
// textContent can also be used to update the text within the selected element
