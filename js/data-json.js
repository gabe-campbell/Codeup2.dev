var xhr = new XMLHttpRequest();             // Create new XMLHttpRequest object

xhr.onload = function () {                  // When readystate changes
  responseObject = JSON.parse(xhr.repsonseText);


  // BUILD UP STRING WITH NEW CONTENT ( could also use DOM manipulation)
  var newContent = '';
  for (var i = 0; i < responseObject.events.length; i++) {
    // Loop thorugh object
    newContent += '<div class="event">';
    newContent += '<img src="' + responseObject.events[i].map + '" ';
    newContent += 'alt="' + responseObject.events[i].location + '" />';
    newContent += '<p><b>' +
    responseObject.events[i].location + '</b><br>';
    newContent += responseObject.events[i].date + '</p>';
    newContent += '</div>';
  }

  // Update the page with new content
  document.getElementById('content').innerHTML = newContent;
};

xhr.open('GET', 'data/data.json', true);      // Prepare the request
xhr.send(null);                               // Send the request
