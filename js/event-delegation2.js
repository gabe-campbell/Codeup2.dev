$(function() {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {status: 'important'},
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});

// This script declares a series of variables
// It then adds an event listener on the ul that fires upon any click or mouseover event, but filters out any contanied element with the id of 'four'
// Line 7 adds additional information to be passed to the event handler
// It then triggers an anonymous function that is passed the event object
// The function sets the variables created earlier to create strings with HTML and variable concatenation
// On line 12 the element with an id of 'notes' is selected and its HTML is set to a concatenation of the variables created on the previous lines
// This script listens for one of the specified events to occur on any element EXCEPT the li which was filtered out and takes the information from that element and adds it to the #note element
