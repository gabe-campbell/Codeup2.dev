(function(){
  var $content = $('#share-options').detach();   // Remove modal from page

  $('#share').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
  });
}());

// The script begins by declaring and setting a jQuery object to reference the #share-options element and chains the .detach() method to it in order to remove it from the page

// There is then an event listener that fires on a click on the #share element, triggering an anonymous function
  // The function uses the .open() method of the modal object and is passed three parameters
    // The first is the content to be shown, which is set to be the $content object that was just created
    // The second is width, which controls the width of the modal window
    // The last is height, controlling the height of the modal window 
