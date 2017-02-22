// NOTE: This example will only work if you run it on a web server (it will not work locally)
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

$('#register').on('submit', function(e) {
  e.preventDefault();             // Prevent the page from being submitted
  var details = $('#register').serialize();   // Serialize the form data
  $.post('register.php', details, function(data) {  // Use $.post() to send it
    $('#register').html(data);          // Where to display the result
  });
});

// This script begins by creating an event listener on the #register element that is fired on a submit, triggering an anonymous function that has been passed the event object
// The function prevents the form from submitting
// The next line creates a variable that gets the data that has been inputted into the form and uses the .serialize() method on it
  // .serialize() takes the data and converts it into a string to be sent to the server
  // It also encodes characters that cannot be used as part of a query string
// The next line creates a $.post() method that takes three parameters
  // The page that the data is being sent to
  // The information that is being sent
  // A function that is passed data as a parameter that will display the results from the server to the user
// The #register element is then selected and its content is set to the HTML response from the server
