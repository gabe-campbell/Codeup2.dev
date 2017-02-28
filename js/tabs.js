$('.tab-list').each(function(){                   // Find lists of tabs
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.active');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
    var  id = this.hash;                           // Get href of clicked tab

    if (id && !$link.is('.active')) {             // If not currently active
      $panel.removeClass('active');               // Make panel inactive
      $tab.removeClass('active');                 // Make tab inactive

      $panel = $(id).addClass('active');          // Make new panel active
      $tab = $link.parent().addClass('active');   // Make new tab active
    }
  });
});

// This script begins by creating a nodelist of the .tab-list ul and uses a .each() method to call an anonymous function
  // A jQuery object called $this is created to store this list
  // A jQuery object called $tab is created and the .find() method is used on $this to get the active li
  // A jQuery object called $link is created and the .find() method is used on $tab to get the link for the active li
  // A jQuery object called $panel is created and the .attr() method is used on $link to get the href of the active li's link

  // An event listener is used on $this and is fired by a click on the .tab-control list, triggering an anonymous function which has been passed the event object
    // The function prevents the link from submitting
    // It then creates a jQuery object to store this clicked link
    // It then creates a variable set to this.hash, which gets the #(descriptor) of the link, in order to tell the page where to go
      // Example clicking on the first will give it the value of #tab-1

    // An if statement is used to check if this $link && id are not currently active
      // If they are not then the $panel and $tab objects are selected and have the 'active' class removed, then the $panel and $tab are set to the id and $link and have the 'active' class set to them
