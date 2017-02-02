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
