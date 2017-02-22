// NOTE: This example will only work if you run it on a web server (it will not work locally)

// This first variable creates the t-shirt options, the HTML for it is shown on p395
var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="images/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="images/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="images/t-green.png" id="green" alt="green" /></a></div></div>';
$('#selector').append(vote);

// This adds ratings to the side bar
$('#selector a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + $(e.target).attr('id');
  $.get('/php/votes.php', queryString, function(data) {
    $('#selector').html(data);
  });
});

// The script begins by declaring a variable, which is set to hold the HTML for the div, link, and image tags for the page
// The next line uses a selector to find the element with the #selector id and appends the vote variable to it

// A jQuery event listener is placed on the link tags in the #selector element and is fired by a click, triggering an anonymous function that has been passed the event object
// The function prevents the link from submitting
// The next line creates a variable called queryString, which is set by taking the targets id attribute and concatenating it with a string
// The next step the script takes is creating a $.get() method using three parameters
  // The page that will handle the request from the same server
  // The string that was created in the previous step
  // A function that handles the response from the server, which is passed data as a parameter.     This function uses a selector to find the #selector element and set its html to the value of data.
// The function replaces the content of the #selector element with a string that contains the id attribute from the target shirt that was chosen
