// NOTE: This example will not work locally in Chrome / IE because of cross-domain restrictions.
// You can try it out on the website for the book http://javascriptbook.com/code
// or run it on your own server.

$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // SERVER RETURNS DATA
    var d = new Date();                                  // Create date object
    var hrs = d.getHours();                              // Get hours
    var mins = d.getMinutes();                           // Get mins
    var msg = '<h2>Exchange Rates</h2>';                 // Start message
    $.each(data, function(key, val) {                    // Add each rate
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
    $('#rates').html(msg);                               // Add rates to page
  }).fail( function() {                                  // THERE IS AN ERROR
    $('#rates').text('Sorry, we cannot load rates.');   // Show error message
  }).always( function() {                                // ALWAYS RUNS
     var reload = '<a id="refresh" href="#">';           // Add refresh link
     reload += '<img src="images /refresh.png" alt="refresh" /></a>';
     $('#reload').html(reload);                          // Add refresh link
     $('#refresh').on('click', function(e) {             // Add click handler
       e.preventDefault();                               // Stop link
       loadRates();                                      // Call loadRates()
     });
  });
}

loadRates();                                             // Call loadRates()

// The script begins by selecting the #exchangerates element and adding HTML to hold the data that will be received and a div that will hold the refresh button

// A function is then declared
  // The first line of the function is a $.getJSON method, which is passed three methods called .done(), .fail(), and .always()
  // The first method - .done() - is a method that will run only if the request has been successfully completed
    // It runs an anonymous function that is passed data as a parameter, once the request has been completed the function is rn
    // It creates a new Date() object and then uses it to get the hours and minutes
    // It then creates a variable called msg to hold the content that will be displayed
    // There is then a .each() method which is passed data and a function, which itself is passed key and val as parameters
      // For each key that is found in the rates.json file a <div> is created with a class of the corresponding key, then the key itself is added into the div and concatenated with its corresponding value from the .json file, all of this is then added to the msg variable
    // The msg variable is then updated with the hrs and mins showing when the page was last updated
    // The #rates element and its HTML is set to the msg variable
  // The second method - .fail() - is passed an anonymous function as a parameter and runs if the request is not successfully completed
    // The function takes the #rates element and sets its text to an error message that is displayed to the user
  // The final method - .always() - is passed a function that always runs, even if the request does or does not get successfully completed
    // The function declares and sets a variable called reload that holds a link tag, which will be used as the refresh button
    // It then adds an image to the refresh link and closes the link tag
    // The #reload element is then selected and its HTML is set to the reload variable
    // An event listener is then added on the #refresh element that is fired by a click, triggering an anonymous function that has been passsed the event object as a parameter
      // The function prevents the link from submitting
      // It the calls the loadRates() function
// The loadRates() function is called once at the end of the script
