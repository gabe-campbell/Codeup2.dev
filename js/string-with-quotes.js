// Create variables to hold the title and note text

var title;
var message;

// Assign values to these variables
// message holds markup to display a link

title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';

// Get the element with an id of title.

var elTitle = document.getElementById('title');

// Replace the content of this element.

elTitle.textContent = title;

// Get the element with and id of note.

var elNote = document.getElementById('note');

// Replace the content of this element

elNote.innerHTML = message;

// This exercise demonstrates how to update an existing element with new content
